import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    message:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
    }]
}, {timestamps: true})

const Conversation = new mongoose.model("Conversation", conversationSchema)

export default Conversation