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
    brand: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'BrandProduct'
    },
    typeProduct: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'TypeProduct'
    },
    cpu: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'CPU'
    },
    disk: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Disk'
    },
    ram: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Ram'
    },
    screenRefreshRate: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'ScreenRefreshRate'
    },
    screenResolution: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'ScreenResolution'
    },
    screenSize: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'ScreenSize'
    },
    screenSpecialFeatures: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'ScreenSpecialFeatures'
    },
    other: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'OtherInfo'
        }
    ]
}, {
    timestamps: true
});


const Product = mongoose.model("Product", productSchema);



export default Product
