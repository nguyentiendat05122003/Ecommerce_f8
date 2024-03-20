import mongoose from "mongoose";


const keyTokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'user'
    },
    publicKey: {
        type: String,
        required: true,
    },
    privateKey: {
        type: String,
        required: true,
    },
    refreshTokensUsed: {
        type: Array,
        default: [],
    },
    refreshToken: {
        type: String,
        require: true
    }
});


const KeyToken = mongoose.model("KeyTokens", keyTokenSchema);



export default KeyToken
