import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cookieParser());
app.use(express.json()); // to parse the incoming data in JSON format in req.body

app.use(cors({
    origin: 'http://localhost:3000', // or '*' to allow all origins
    credentials: true, 
}));

// Routes start here
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/Front-End/dist")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Front-End", "dist", "index.html"))
})

// Creating server
server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`App is listening on port ${PORT}`);
});
