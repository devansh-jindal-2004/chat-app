import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

const protectRoute = async(req, res, next)=> {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.send(401).json({error: "unauthorised user"})
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(!decode){
            return res.status(401).json({error: "unauthorised user"})
        }
        const user = await User.findById(decode.userId).select("-password");

        if(!user){
            return res.status(400).json({error: "user not found"});
        }

        req.user = user;

        next()

    } catch (error) {
        console.log("error in protect route middleware", error.message)
        res.status(400).json({error: "internal server error"})
    }
}

export default protectRoute;