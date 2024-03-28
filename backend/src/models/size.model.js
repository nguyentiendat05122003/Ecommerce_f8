import mongoose from "mongoose";
const sizeSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    dimensions: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


const Size = mongoose.model("Size", sizeSchema);



export default Size
