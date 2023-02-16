const mongoose = require('mongoose');

const { Schema } = mongoose;

const serviceSchema = new Schema({
    serviceName: { type: String, required: true },
    servicePic: { type: String, required: true },
    serviceDesc: { type: String, required: true },
    serviceTags: { type: String, required: true },
    servicePrice: { type: Number, required: true },
    serviceOwner: { type: String, required: true },
}, 
  { timestamps: true }
);

const Service = mongoose.model('Service', serviceSchema);
module.exports = { Service, serviceSchema };