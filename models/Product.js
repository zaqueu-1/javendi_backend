const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    productName: { type: String, required: true },
    productPic: {public_id: { type: String, required: true }, url: { type: String, required: true }},
    productCond: { type: String, required: true },
    productDesc: { type: String, required: true },
    productTags: { type: String, required: false },
    productPrice: { type: Number, required: true },
    productQtd: { type: Number, required: true },
    productOwner: { type: String, required: true },
}, 
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = { Product, productSchema };