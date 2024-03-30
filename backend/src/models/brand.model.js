import mongoose from "mongoose";
const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    thumb: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const BrandProduct = mongoose.model("BrandProduct", brandSchema);



export default BrandProduct
