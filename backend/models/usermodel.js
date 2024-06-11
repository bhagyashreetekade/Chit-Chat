import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:['male','female']
    },
    profilePicture:{
        type:String,
        default:"",
    },

    //createdAt,updatedAt =>Member since <createdAt>
},{timestamps: true});

//we have schema now we will create the model
const User = mongoose.model("User",userSchema);

export default User;