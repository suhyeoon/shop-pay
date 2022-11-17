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

/* 업로드 페이지 - 업로드한 이미지를 몽고DB에 저장 */
router.post("/image", (req, res) => {
    upload(req, res, error => {
        if (error) {
            return res.json({ success: false, error })
        } else {
            /* 에러가 없는 경우 - 이미지파일이 저장된 위치, 저장된 파일명  */
            return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
        }
    })
})

/* 업로드 페이지 - 업로드한 정보를 몽고DB에 저장 */
router.post("/", (req, res) => {
    const product = new Product(req.body)
    product.save((error) => {
        if (error) {
            return res.status(400).json({ success: false, error })
        } else {
            return res.status(200).json({ success: true })
        }
    })
})

/* 랜딩 페이지 - 몽고DB products 컬렉션에 있는 모든 상품 정보를 가져옴*/
router.post("/products", (req, res) => {

    let skip = req.body.skip ? parseInt(req.body.skip) : 0
    let limit = req.body.limit ? parseInt(req.body.limit) : 20
    let keyword = req.body.keyword

    let findArgs = {}

    for (let key in req.body.filters) { /* key는 countries 또는 price */
        if (req.body.filters[key].length > 0) { /* 하나라도 체크된 체크박스 또는 라디오박스가 있으면 */
            if (key === "countries") {
                findArgs[key] = req.body.filters[key] /* findArgs의 { }에 저장 */
            }
            else if (key === "price") {
                findArgs[key] = {
                    /* $gte는 크거나 같으면 */
                    /* $lte는 작거나 같으면 */
                    $gte: req.body.filters[key][0], /* Datas.js에서 price 데이터의 각 원소 "array"의 값에 0번째 인덱스 */
                    $lte: req.body.filters[key][1] /* Datas.js에서 price 데이터의 각 원소 "array"의 값에 1번째 인덱스 */
                }
            }
        }
    }

    if (keyword) { /* 검색 값이 들어오면 */
        Product.find(findArgs)
            .find({ $text: { $search: keyword } }) /* 몽고DB 문법 사용 */
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((error, productInfo) => {
                if (error) {
                    return res.status(400).json({ success: false, error })
                } else {
                    return res.status(200).json({
                        success: true,
                        productInfo,
                        postSize: productInfo.length
                    })
                }
            })
    } else {
        Product.find(findArgs)
            .populate("writer")
            .skip(skip)
            .limit(limit)
            .exec((error, productInfo) => {
                if (error) {
                    return res.status(400).json({ success: false, error })
                } else {
                    return res.status(200).json({
                        success: true,
                        productInfo,
                        postSize: productInfo.length
                    })
                }
            })
    }
})

/* 상품상세보기 페이지, 장바구니 페이지 */
router.get('/products_by_id', (req, res) => {

    /* 쿼리는 req.query로 가져옴 */
    let type = req.query.type
    let productIds = req.query.id /*  6340d7d3efac3d3770faacc4, 6340d772efac3d3770faacc2, 63401c67b294fc41881e79cf */

    if (type === 'array') {
        productIds = req.query.id.split(',') /* ['6340d7d3efac3d3770faacc4', '6340d772efac3d3770faacc2', '63401c67b294fc41881e79cf'] */
    }

    Product.find({ _id: { $in: productIds } }) /* $in의 값인 [ ] 중 하나만 반환함 */
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