const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({

    name:{type:String, reruired:true}, 
    description:{type:String}, 
    img:{type:String}

},
{timestamps:true,versionKey:false})

const FeaturesModel = mongoose.model('Features', DataSchema);

module.exports = FeaturesModel;  