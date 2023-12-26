const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

    
    
    title:{ type: String, required: true }, 
    Des:{type:String}, 
    price:{type:String}, 
    img:{type:String},
    productID: { type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true }


   
},
{timestamps:true,versionKey:false})

const ProductSliderModel = mongoose.model(' ProductSliders', DataSchema);

module.exports =   ProductSliderModel;