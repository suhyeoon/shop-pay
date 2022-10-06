const express = require('express'); /* Node Express 모듈 추출 */
const router = express.Router(); /* 서버 생성 */
const multer = require('multer');

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

router.post("/image", (req, res) => {
    /* 가져온 이미지 저장해주는 기능 */
    upload(req, res, error => {
        if (error) { /* 에러가 발생한 경우 - 에러정보 전달 */
            return req.json({ success: false, error })
        }
        /* 에러가 없는 경우 - 이미지파일이 저장된 위치, 저장된 파일명  */
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })
})

module.exports = router;