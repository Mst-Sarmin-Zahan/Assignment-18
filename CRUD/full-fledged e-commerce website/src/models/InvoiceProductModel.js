const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    
     
    userID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
    productID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Products', required: true },
    invoiceID:{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoices', required: true },
    qty:{type:String, reruired:true},
    price:{type:String, reruired:true},
    color:{type:String, reruired:true},
    size:{type:String, reruired:true},


},
{timestamps:true,versionKey:false})

const InvoiceProductModel = mongoose.model('InvoiceProducts', DataSchema);

module.exports = InvoiceProductModel;