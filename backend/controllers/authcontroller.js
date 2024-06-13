import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req, res) => {

    try {
        const {fullName,username,password,confirmPassword,gender}= req.body;
        
        if(password !== confirmPassword) {
            return res.status(400).json({msg:"Passwords do not match"})
        }

        //check if the user already exists
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({msg:"User already exists"})
        }

        //Hash the password
        //A salt is a random value added to the password before hashing to ensure that even if two users have the same password, their hashed values will be different.
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = await User.create({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePicture: gender === "male"? boyProfilePic : girlProfilePic
        })

        //save the new user in db

        if(newUser){

            //Generate jwt token
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName:newUser.fullName,
                username: newUser.username,
                gender:newUser.gender,
                profilePicture:newUser.profilePicture
            })
        }
        else{
            res.status(400).json({msg:"Invalid username or password"})
        }
        

    } catch (error) {
        console.error("Error in signup controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const login = async(req, res) => {

    try {
        const { username,password}=req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        //if user does not exist or password is incorrect
        if(!user || !isPasswordCorrect){
            return res.status(400).json({msg:"Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName:user.fullName,
            username: user.username,
            profilePic:user.profilePic,
        })

    } catch (error) {
        console.error("Error in login controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

export const logout = async(req, res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({msg:"Logged out successfully"})

    } catch (error) {
        console.error("Error in logout controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}

