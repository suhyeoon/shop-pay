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
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array, /* 여러장의 이미지 */
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    country: {
        type: Number,
        default: 1
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


const Product = mongoose.model('Product', productSchema);

module.exports = { Product }