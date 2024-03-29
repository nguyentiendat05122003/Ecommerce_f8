import mongoose from "mongoose";
const CPUSchema = new mongoose.Schema({
    value: {
        type: String,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const CPU = mongoose.model("CPU", CPUSchema);



export default CPU
