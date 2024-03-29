import mongoose from "mongoose";
const screenResolutionSchema = new mongoose.Schema({
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


const ScreenResolution = mongoose.model("ScreenResolution", screenResolutionSchema);



export default ScreenResolution
