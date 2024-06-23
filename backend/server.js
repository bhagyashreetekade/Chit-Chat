import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/authroutes.js"
import messageRoutes from "./routes/messageroutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // (to parse incoming request with JSON) to extract the fields frm request.body
app.use(cookieParser()); // call the middleware to access the cookies

app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

// app.get("/",(req,res)=>{
//     // root route https://localhost:5000/
//     res.send("Hello World");
// });

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running  on port ${PORT}`);
});

