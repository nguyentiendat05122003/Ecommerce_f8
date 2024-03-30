import mongoose from "mongoose";
const specialFeatureSchema = new mongoose.Schema({
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


const SpecialFeatures = mongoose.model("SpecialFeatures", specialFeatureSchema);



export default SpecialFeatures
