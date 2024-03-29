import mongoose from "mongoose";
const diskSchema = new mongoose.Schema({
    value: {
        type: String,
    },
    desc: {
        type: String,
    },

}, {
    timestamps: true
});


const Disk = mongoose.model("Disk", diskSchema);



export default Disk
