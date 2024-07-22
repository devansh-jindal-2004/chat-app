import User from "../Models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";
import { v2 as cloudinary } from "cloudinary";

export const signup = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const user = await User.findOne({ userName });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }

        // Hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        const profilePicUrl = gender === "male" ? boyProfilePic : girlProfilePic;

        const newUser = new User({
            userName,
            fullName,
            password: hashedPassword,
            gender,
            profilePic: { url: profilePicUrl }
        });

        await newUser.save();
        generateTokenAndSetCookie(newUser._id, res);

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });

        if (!user) {
            return res.status(401).json({ error: "Incorrect username or password" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: "Incorrect username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const update = async (req, res) => {
    const { userName, fullName } = req.body;
    const userId = req.user._id;

    if (!userId) return res.status(404).send({ message: 'User not logged in' });

    const updateData = {};
    if (userName) updateData.userName = userName;
    if (fullName) updateData.fullName = fullName;

    try {
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: updateData },
            { new: true, select: '-password' }
        );

        if (!updatedUser) {
            return res.status(404).send({ message: 'User not found' });
        }

        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send({ message: 'Error updating user', error });
    }
};

import { v2 as cloudinary } from "cloudinary";
import User from "../models/User.js";

export const updatePic = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log("User ID:", userId);

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("Existing profilePic:", user.profilePic);
        console.log("Uploaded file:", req.file);

        if (user.profilePic && user.profilePic.public_id) {
            await cloudinary.uploader.destroy(user.profilePic.public_id);
        }

        user.profilePic = {
            url: req.file.path,
            public_id: req.file.filename
        };

        await user.save();

        console.log("Updated user:", user);
        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating profile picture:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const theme = async (req, res) => {
    try {
        const userId = req.user.id;
        const { theme } = req.body;

        if(!theme){
            const user = await User.findByIdAndUpdate(
                userId,
                { theme: null },
                { new: true, select: '-password' }
            );
        }

        if (typeof theme !== 'string') {
            return res.status(400).json({ message: "Invalid theme" });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { theme },
            { new: true, select: '-password' }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error updating theme:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
