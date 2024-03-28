import mongoose from "mongoose";
const connectivity_ExpansionPortsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    ports: {
        type: Array,
        required: true,
    },
    wireless_Connectivity: {
        type: String,
        required: true,
    },
    webcam: {
        type: String,
        required: true,
    },
    other_Features: {
        type: String,
        required: true,
    },
    keyboard_backlight: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});


const Connectivity_ExpansionPort = mongoose.model("Connectivity_ExpansionPort", connectivity_ExpansionPortsSchema);



export default Connectivity_ExpansionPort
