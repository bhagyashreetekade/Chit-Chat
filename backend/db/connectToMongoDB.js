import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("Connected to Mongo DB");

    } catch (error) {
        console.error("Error connecting to Mongo DB",error.message);
    }
}

export default connectToMongoDB;