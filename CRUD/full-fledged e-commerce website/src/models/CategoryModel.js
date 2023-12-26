const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

    categoryName:{type:String, reruired:true},
    categoryImg:{type:String}

},
{timestamps:true,versionKey:false})

const CategoryModel = mongoose.model('Categories', DataSchema);

module.exports = CategoryModel;                                                         