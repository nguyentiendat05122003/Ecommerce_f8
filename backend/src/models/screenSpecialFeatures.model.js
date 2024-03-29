import mongoose from "mongoose";
const screenSpecialFeatureSchema = new mongoose.Schema({
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


const ScreenSpecialFeatures = mongoose.model("ScreenSpecialFeatures", screenSpecialFeatureSchema);



export default ScreenSpecialFeatures
