const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    
    brandName:{type:String, reruired:true}, 
    brandImg:{type:String}
  
},
{timestamps:true,versionKey:false})

const BrandModel = mongoose.model('brands', DataSchema);

module.exports = BrandModel;