import mongoose from "mongoose";
const graphicsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    graphics_card: {
        type: String,
        required: true,
    },
    audio_technology: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


const Graphics = mongoose.model("Graphics", graphicsSchema);



export default Graphics
