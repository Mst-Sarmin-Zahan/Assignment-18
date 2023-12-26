const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    userID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    payable:{ type: Number, required: true },
    cus_details:{type:String, reruired:true},
    ship_details:{type:String, reruired:true},
    tran_id:{type:String},
    val_id:{type:String},
    payment_status:{type:String},
    delivery_status:{type:String},
    total:{type:String}, 
    vat:{type:String},

},
{timestamps:true,versionKey:false})

const InvoiceModel = mongoose.model('Invoices', DataSchema);

module.exports = InvoiceModel;  