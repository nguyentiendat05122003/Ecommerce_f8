import mongoose from "mongoose";
const screenRefreshRateSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const ScreenRefreshRate = mongoose.model("ScreenRefreshRate", screenRefreshRateSchema);



export default ScreenRefreshRate
