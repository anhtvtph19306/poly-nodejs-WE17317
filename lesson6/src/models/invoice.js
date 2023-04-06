import mongoose from "mongoose";
import user from "./user";

const { Schema } = mongoose

const Invoice = new Schema({
    ngaymua: {
        type: Date,
        default: Date.now
    },
    good: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
        required: true
    },

    userId: {
        type: Schema.ObjectId,
        ref: user
    }
})
export default mongoose.model("invoice", Invoice);