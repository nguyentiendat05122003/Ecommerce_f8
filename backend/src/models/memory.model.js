import mongoose from "mongoose";
const memorySchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    ram: {
        type: String,
    },
    type_ram: {
        type: Number,
        required: true,
    },
    ram_bus_speed: {
        type: Number,
        required: true,
    },
    maximum_supported_RAM: {
        type: String,
        required: true,
    },
    disk: {
        type: String,
        required: true,
    }

}, {
    timestamps: true
});


const Memory = mongoose.model("Memory", memorySchema);



export default Memory
