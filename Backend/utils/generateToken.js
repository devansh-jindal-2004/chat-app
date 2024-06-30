import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: `3d`})

    res.cookie("jwt",token, {
        maxAge: 3*24*60*60*1000,
        httpOnly:true, //prevents xxs attacks also known as cross site attacks
        sameSite: "strict" //crsp attacks
    })
}

export default generateTokenAndSetCookie;