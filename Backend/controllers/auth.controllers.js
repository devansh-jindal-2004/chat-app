import User from "../Models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const {fullName, userName, password, confirmPassword, gender} = req.body;
        if(password  !== confirmPassword){
            return res.status(400).json({error: "passwords dont match"})
        }

        const user = await User.findOne({userName})
        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

        // hashing pass here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            userName,
            fullName,
            password: hashedPassword                                     ,
            gender,
            profilePic: gender=="male"?boyProfilePic:girlProfilePic

        })

        if(newUser){
            await newUser.save();
            generateTokenAndSetCookie(newUser._id, res)

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
        } else{
            res.status(400).json({error: "invalid user data"})
        }

    } catch (error) {
        console.log("error in signup controller",  error.message)
        res.status(500).json({error:"internal server error"})
    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body;
        const user = await User.findOne({ userName });

        const isPasswordCorrect = await bcrypt.compare(password, user ? user.password : "");
        if (!user || !isPasswordCorrect) {
            return res.status(401).json({ error: "Incorrect username or password" });
        }

        generateTokenAndSetCookie(user._id, res);
        return res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profilePic: user.profilePic
        });

    } catch (error) {
        console.log("Error in login controller:", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}

export const logout = (req, res) => {
   try {
    res.cookie("jwt", "", {maxAge: 0})
    res.status(200).json({message: "logged out sucessfully"})
   } catch (error) {
        console.log("error in logOut controller",  error.message)
        res.status(500).json({error:"internal server error"})   
   }
}

export const update = async (req, res) => {
    const { userName, fullName, profilePic } = req.body;
    const userId = req.user._id;

    if (!userId) return res.status(404).send({ message: 'User not logged in' });

    const updateData = {};
    if (userName) updateData.userName = userName;
    if (fullName) updateData.fullName = fullName;
    if (profilePic) updateData.profilePic = profilePic;

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

