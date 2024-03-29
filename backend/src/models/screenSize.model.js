import mongoose from "mongoose";
const screenSizeSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const ScreenSize = mongoose.model("ScreenSize", screenSizeSchema);



export default ScreenSize
