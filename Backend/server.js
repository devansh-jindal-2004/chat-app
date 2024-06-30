import express from "express"
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieParser())
app.use(express.json()); //to parse the incomming data in json format in req.body

//Routes starts here

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

// creating server

app.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`app is listening on port ${PORT}`)
});