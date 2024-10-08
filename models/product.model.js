const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productImage: {
        type: String,
    },
    productPrice: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    categery: {
        type: String
    },
    productBrand: {
        type: String
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = mongoose.model('product', productSchema)
