const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
    
    store_id:{type:String, reruired:true}, 
    store_passwd:{type:String, reruired:true}, 
    currency:{type:String, reruired:true}, 
    success_url:{ type: String }, 
    fail_url:{ type: String }, 
    cancel_url:{ type: String }, 
    ipn_url:{ type: String }, 
    init_url:{ type: String }



},
{timestamps:true,versionKey:false})

const PaymentSettingModel = mongoose.model('PaymentSettings', DataSchema);

module.exports = PaymentSettingModel;