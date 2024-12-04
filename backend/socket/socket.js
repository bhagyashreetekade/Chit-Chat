import {Server} from 'socket.io'
import http from 'http';
import express from 'express';
//we have express sever and on top os express server we have add the socket io server
const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:[ 'https://chit-chat-gvws.vercel.app'],
        methods:['GET','POST']
    }
})


export const getReceiverSocketId = (receiverId) => {
    //when we pass user socket id when we pass receiver id
    return userSocketMap[receiverId];
}

const userSocketMap = {};  //{userId:SocketId}

io.on('connection',(socket)=>{
    console.log('a user connected',socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined"){
        userSocketMap[userId] = socket.id;
    }

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    //socket.on() is used to listen to the events ,can be used both on client and server side
    socket.on("disconnect",()=>{
        console.log("user disconnected",socket.id);

        //when user gets offline
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    })


})
export {app,io,server}
