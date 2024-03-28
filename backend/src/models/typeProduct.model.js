import mongoose from "mongoose";
const typeProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


const TypeProduct = mongoose.model("TypeProduct", typeProductSchema);



export default TypeProduct
