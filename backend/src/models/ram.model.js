import mongoose from "mongoose";
const ramSchema = new mongoose.Schema({
    value: {
        type: String,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const Ram = mongoose.model("Ram", ramSchema);



export default Ram
