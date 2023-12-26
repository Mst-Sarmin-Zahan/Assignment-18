const mongoose = require("mongoose");

const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({


    productID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
    userID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true }, 
    des:{type:String}, 
    rating:{type:String}
    
    
   
},
{timestamps:true,versionKey:false})

const ReviewModel = mongoose.model('Reviews', DataSchema);

module.exports = ReviewModel;