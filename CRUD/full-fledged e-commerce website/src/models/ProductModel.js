const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

    title:{ type: String, required: true }, 
    shortDes:{type:String}, 
    price:{type:String}, 
    discount:{type:String}, 
    discountPrice:{type:String}, 
    image:{type:String}, 
    star:{type:String}, 
    stock:{type:String}, 
    remark:{type:String}, 
    categoryID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Categories', required: true }, 
    brandID:{ type: mongoose.Schema.Types.ObjectId, ref: 'brands', required: true }


   
},
{timestamps:true,versionKey:false})

const ProductModel = mongoose.model('Products', DataSchema);

module.exports =  ProductModel;