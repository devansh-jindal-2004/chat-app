import express from 'express'
import http from "http"
import { Server } from 'socket.io';

const app = express()

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:["https://chat-app-bdol.onrender.com/"],
        methods:["GET", "POST"]
    }
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket)=> {
    console.log("user connected", socket.id)

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") {
        userSocketMap[userId] = socket.id
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", ()=> {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId]
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

export {app, io, server}