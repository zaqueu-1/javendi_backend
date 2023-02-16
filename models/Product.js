const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productName: { type: String, required: true },
    productPic: { type: String, required: true },
    productCond: { type: String, required: true },
    productDesc: { type: String, required: true },
    productTags: { type: String, required: true },
    productPrice: { type: Number, required: true },
    productQtd: { type: Number, required: true },
    productOwner: { type: String, required: true },
}, 
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productSchema };