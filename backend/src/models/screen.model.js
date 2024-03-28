import mongoose from "mongoose";
const screenSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    size: {
        type: String,
        required: true,
    },
    resolution: {
        type: String,
        required: true,
    },
    refresh_rate: {
        type: String,
        required: true,
    },
    screen_technology: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
});


const Screen = mongoose.model("Screen", screenSchema);



export default Screen
