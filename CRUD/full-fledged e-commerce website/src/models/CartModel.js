const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    
    productID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
    userID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    color:{type:String}, 
    price:{type:String}, 
    qty:{ type: Number, required: true, min: 1 },
    size:{type:String}
  

},
{timestamps:true,versionKey:false})

const CartModel = mongoose.model('Carts', DataSchema);

module.exports = CartModel;