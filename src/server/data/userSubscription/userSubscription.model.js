import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    email:String,
    pincodes:[{type:Number,min:111111,max:999999}],
    active:[{type:Boolean,default:true}],
    mailsSent:[String]
});

export default mongoose.model("subscription", subscriptionSchema);
