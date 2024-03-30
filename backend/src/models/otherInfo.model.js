import mongoose from "mongoose";
const otherInfoSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    },
    desc: {
        type: String
    }

}, {
    timestamps: true
});


const OtherInfo = mongoose.model("OtherInfo", otherInfoSchema);



export default OtherInfo
