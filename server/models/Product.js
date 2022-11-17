const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    writer: { /* 현재 로그인된 유저의 ID */
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    desc: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    countries: {
        type: Number,
        default: 1
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

/* 검색 기능 */
productSchema.index({ /* 검색어가 중점적으로 걸려야하는 필드 */
    title: 'text',
    desc: 'text'
}, {
    weights: { /* 각 필드의 중요도 */
        title: 5, /* title 필드를 5배 중요하게 여겨서 검색함 */
        desc: 1
    }
}
)

const Product = mongoose.model('Product', productSchema);

module.exports = { Product }