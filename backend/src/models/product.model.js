import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name laptop"],
    },
    thumb: {
        type: Array,
        required: true,
    },
    detailImages: {
        type: Array,
        required: true,
    },
    video: {
        type: String,
    },
    desc: {
        type: String,
        require: true
    },
    slug: String,
    ratingsAverage: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must above 1.0'],
        max: [5, 'Rating must under 5.0'],
        set: (val) => Math.round(val * 10) / 10
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        default: true,
        select: false,
    },
}, {
    timestamps: true
});


const Product = mongoose.model("Product", productSchema);



export default Product
