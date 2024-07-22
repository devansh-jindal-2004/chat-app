import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    profilePic: {
        url: { type: String },
        public_id: { type: String }
    },
    theme: {
        type: String,
        default: null
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
