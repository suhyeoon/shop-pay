const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { Product } = require("../models/Product");
const { Payment } = require("../models/Payment");
const { auth } = require("../middleware/auth");
const { fixRequestBody } = require('http-proxy-middleware');
const async = require("async");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
        cart: req.user.cart,
        history: req.user.history
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});


/* 장바구니 담기 */
router.post("/addToCart", auth, (req, res) => {

    /* 몽고DB users 컬렉션에 id가 일치하는 한명의 유저 정보를 가져와서 userInfo에 담음 */
    User.findOne({ _id: req.user._id },
        (error, userInfo) => {

            let duplicate = false
            userInfo.cart.forEach((item) => { /* 유저의 cart를 forEach로 돌려서  */
                if (item.id === req.body.productId) { /* cart 안에 있는 각 상품의 id 와 장바구니에 담으려고 하는 상품 id가 일치하는지 비교 */
                    duplicate = true /* 일치하면 이미 장바구니에 동일한 상품이 존재하므로 true 반환 */
                }
            })

            /* 장바구니에 동일한 상품이 이미 있을 때 */
            if (duplicate) {
                User.findOneAndUpdate( /* 하나를 찾은 다음에 업데이트함 */
                    { _id: req.user._id, "cart.id": req.body.productId }, /* 일치하는 유저의 id를 찾은 다음에 해당 유저의 cart에 있는 상품의 id를 찾음 */
                    { $inc: { "cart.$.quantity": 1 } },/* 일치하는 상품의 id에 해당 상품의 quantity를 +1 해줌, $inc는 값을 증가 시켜줌*/
                    { new: true }, /* findOneAndUpdate로 업데이트 된 결과값을 반환 받으려면 { new: true } 를 반드시 넣어줘야함 */
                    (error, userInfo) => { /* userInfo에 해당 유저의 모든 정보가 담김 */
                        if (error) {
                            return res.status(400).json(error)
                        } else {
                            return res.status(200).json(userInfo.cart) /* 해당 유저의 cart 정보를 클라이언트에 전송 */
                        }
                    }
                )
            }
            /* 장바구니에 동일한 상품이 없을 때 */
            else {
                User.findOneAndUpdate(
                    { _id: req.user._id }, /* 일치하는 유저의 id를 찾음 */
                    {
                        $push: { /* $push는 배열을 추가해줌*/
                            cart: { /* cart 키에 상품 id, 장바구니에 담은 수량, 담은 날짜를 DB에 넣어줌 */
                                id: req.body.productId,
                                quantity: 1,
                                date: Date.now()
                            }
                        }
                    },
                    { new: true }, /* findOneAndUpdate로 업데이트 된 결과값을 반환 받으려면 { new: true } 를 반드시 넣어줘야함 */
                    (error, userInfo) => { /* userInfo에 해당 유저의 모든 정보가 담김 */
                        if (error) {
                            return res.status(400).json(error)
                        } else {
                            return res.status(200).json(userInfo.cart) /* 해당 유저의 cart 정보를 클라이언트에 전송 */
                        }
                    }
                )
            }
        })
})

/* 장바구니 페이지 - 삭제하기 버튼 기능 */
router.get("/removeFromCart", auth, (req, res) => {

    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            $pull: {
                cart: {
                    id: req.query.id
                }
            }
        },
        { new: true },
        (error, updateUserInfo) => {
            let cart = updateUserInfo.cart
            let array = cart.map((item) => { /* array = ['상품B id', '상품C id', '상품D id' ] */
                return item.id
            })

            Product.find({ _id: { $in: array } })
                .populate('writer')
                .exec((error, productInfo) => {
                    if (error) {
                        res.status(400).json(error)
                    } else {
                        res.status(200).json(
                            {
                                productInfo,
                                cart
                            }
                        )
                    }
                })
        }
    )
})

/* 장바구니 페이지 - 결제 완료한 후 결제 정보 저장하는 기능  */
router.post("/successBuy", auth, (req, res) => {

    /* users 컬렉션에 유저의 history 필드에 '간단한' 결제 정보 넣기 */
    let history = []
    req.body.cartDetail.forEach((product) => {
        history.push({
            purchaseDate: Date.now(),
            name: product.title,
            id: product._id,
            price: product.price,
            quantity: product.quantity,
            paymentId: req.body.paymentData.paymentID
        })
    })

    /* payments 컬렉션에 '자세한' 결제 정보 넣기 */
    let transactionData = {}
    transactionData.user = {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    transactionData.data = req.body.paymentData
    transactionData.product = history


    User.findOneAndUpdate(
        { _id: req.user._id },
        {
            $push: { history: history },
            $set: { cart: [] }
        },
        { new: true },
        (error, userInfo) => {
            if (error) {
                return res.status(400).json({ success: false, error })
            } else {
                const payment = new Payment(transactionData)
                payment.save((error, document) => {
                    if (error) {
                        return res.status(400).json({ success: false, error })
                    } else {
                        let products = []
                        document.product.forEach((item) => {
                            products.push({
                                id: item.id,
                                quantity: item.quantity
                            })
                        })
                        /* products 컬렉션에 구매한 상품의 sold 필드 업데이트 시키기 */
                        async.eachSeries(products, (item, callback) => {
                            Product.updateMany(
                                { _id: item.id },
                                {
                                    $inc: {
                                        sold: item.quantity
                                    }
                                },
                                { new: false },
                                callback
                            )
                        }, (error) => {
                            if (error) {
                                return res.status(400).json({ success: false, error })
                            } else {
                                return res.status(200).json({
                                    success: true,
                                    cart: userInfo.cart,
                                    cartDetail: []
                                })
                            }
                        })
                    }
                })
            }
        }
    )
})

module.exports = router;    