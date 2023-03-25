import mongoose from "mongoose";
const {Schema} = mongoose

const product = new Schema({
    name:{
        type:String,
        require :true
    },
    price:{
        type:Number,
    },
    createdAt:{
        type: Date,
        default:Date.now
    }
})

export default mongoose.model("product",product)