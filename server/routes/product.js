const express = require('express'); /* Node Express 모듈 추출 */
const router = express.Router(); /* 서버 생성 */
const multer = require('multer');
const { Product } = require('../models/Product');

//=================================
//             Product
//=================================
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage: storage }).single("file")

/* 가져온 이미지 저장해주는 기능 */
router.post("/image", (req, res) => {
    upload(req, res, error => {
        if (error) { /* 에러가 발생한 경우 - 에러정보 전달 */
            return res.json({ success: false, error })
        } else {
            /* 에러가 없는 경우 - 이미지파일이 저장된 위치, 저장된 파일명  */
            return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
        }
    })
})

/* 받아온 정보를 DB에 저장해주는 기능 */
router.post("/", (req, res) => {
    const product = new Product(req.body) /* 받아온 정보를 model에 저장 */
    product.save((error) => {
        if (error) { /* 저장 중 에러가 발생하면 */
            return res.status(400).json({ success: false, error }) /* 400 응답 상태 코드와 false, 에러메세지를 전달함 */
        } else { /* 저장 성공하면 */
            return res.status(200).json({ success: true }) /* 200 응답 상태 코드와 true를 전달함 */
        }
    })
})

/* MongoDB product 컬렉션에 들어있는 모든 상품 정보를 가져오는 기능*/
router.post("/products", (req, res) => {

    let skip = req.body.skip ? parseInt(req.body.skip) : 0
    let limit = req.body.limit ? parseInt(req.body.limit) : 20 /* true면 8개 false면 20개 */
    let keyword = req.body.keyword

    let findArgs = {}

    for (let key in req.body.filters) {
        /* console.log(key) */ /* countries 또는 price 출력 */
        if (req.body.filters[key].length > 0) { /* 하나라도 체크된 체크박스가 있으면 */

            if (key === "price") {
                findArgs[key] = {
                    /* 크거나 같으면 */
                    $gte: req.body.filters[key][0], /* Datas.js에서 price 데이터의 각 원소 "array"의 값에 0번째 인덱스 */
                    /* 작거나 같으면 */
                    $lte: req.body.filters[key][1] /* Datas.js에서 price 데이터의 각 원소 "array"의 값에 1번째 인덱스 */
                }
            } else {
                findArgs[key] = req.body.filters[key] /* findArgs의 { }에 저장 */
            }
        }
    }

    if (keyword) { /* 검색 값이 들어오면 */
        Product.find(findArgs) /* MongoDB에 저장된 데이터를 가져옴 */
            .find({ $text: { $search: keyword } }) /* 몽고DB 문법 사용 */
            .populate("writer") /* 유저 ID인 'writer'를 가져오면 유저의 모든 정보를 가져올 수 있음  */
            .skip(skip)
            .limit(limit) /* 상품 데이터를 8개만 가져옴 */
            .exec((error, productInfo) => { /* productInfo 파라미터에 유저의 모든 정보(상품 1개의 정보는 { } array 형태로 담김)가 담김 */
                if (error) {
                    return res.status(400).json({ success: false, error })
                } else {
                    return res.status(200).json({
                        success: true,
                        productInfo,
                        postSize: productInfo.length /* 상품 개수 */
                    }) /* 데이터 가져오기 성공하면 클라이언트에 productInfo도 같이 전달함 */
                }
            })
    } else {
        Product.find(findArgs) /* MongoDB에 저장된 데이터를 가져옴 */
            .populate("writer") /* 유저 ID인 'writer'를 가져오면 유저의 모든 정보를 가져올 수 있음  */
            .skip(skip)
            .limit(limit) /* 상품 데이터를 8개만 가져옴 */
            .exec((error, productInfo) => { /* 쿼리 실행, productInfo 파라미터에 유저의 모든 정보(상품 1개의 정보는 { } array 형태로 담김)가 담김 */
                if (error) {
                    return res.status(400).json({ success: false, error })
                } else {
                    return res.status(200).json({
                        success: true,
                        productInfo,
                        postSize: productInfo.length /* 상품 개수 */
                    }) /* 데이터 가져오기 성공하면 클라이언트에 productInfo도 같이 전달함 */
                }
            })
    }
})

/* 상품 상세보기 페이지, 장바구니 페이지 */
router.get('/products_by_id', (req, res) => {

    /* 쿼리는 req.query로 가져옴 */
    let type = req.query.type /* 타입이 담김 */
    let productIds = req.query.id /* 유니크 아이디가 담김*/

    if (type === 'array') {
        let ids = req.query.id.split(',')
        productIds = ids.map((item) => {
            return item
        })
    }

    Product.find({ _id: { $in: productIds } })
        .populate('writer')
        .exec((error, product) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(product)
            }
        })
})


module.exports = router;