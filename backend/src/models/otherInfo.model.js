import mongoose from "mongoose";
const otherInfoSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    battery_Information: {
        type: String,
        required: true,
    },
    charging_power: {
        type: String,
        required: true,
    },
    os: {
        type: String,
        required: true,
    },
    release_Date: {
        type: String,
        required: true,
    },

}, {
    timestamps: true
});


const OtherInfo = mongoose.model("OtherInfo", otherInfoSchema);



export default OtherInfo
