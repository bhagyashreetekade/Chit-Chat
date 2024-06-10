import express from "express";
import { config } from "dotenv";
import authRoutes from "./routes/authroutes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

config();

app.use(express.json()); // (to parse incoming request with JSON) to extract the fields frm request.body

app.use("/api/auth",authRoutes)

// app.get("/",(req,res)=>{
//     // root route https://localhost:5000/
//     res.send("Hello World");
// });

app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`server is running  on port ${PORT}`);
});

