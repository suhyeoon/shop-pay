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
            return req.json({ success: false, error })
        }
        /* 에러가 없는 경우 - 이미지파일이 저장된 위치, 저장된 파일명  */
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
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

module.exports = router;