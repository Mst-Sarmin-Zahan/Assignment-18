const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    img1:{ type: String }, 
    img2:{ type: String }, 
    img3:{ type: String }, 
    img4:{ type: String }, 
    des:{ type: String }, 
    color:{ type: String }, 
    size:{ type: String }, 
    productID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },


},
{timestamps:true,versionKey:false})

const ProductDetailsModel = mongoose.model('ProductDetails', DataSchema);

module.exports = ProductDetailsModel;