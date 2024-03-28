import mongoose from "mongoose";
const processorSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.ObjectId,
        ref: 'Product',
        required: [true]
    },
    CPU_technology: {
        type: String,
    },
    number_of_cores: {
        type: Number,
        required: true,
    },
    number_of_threads: {
        type: Number,
        required: true,
    },
    CPU_speed: {
        type: String,
    },
    maximum_CPU_speed: {
        type: String,
        require: true
    },
    cache: {
        type: String,
        require: true
    }

}, {
    timestamps: true
});


const Processor = mongoose.model("Processor", processorSchema);



export default Processor
