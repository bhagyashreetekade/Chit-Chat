import jwt from 'jsonwebtoken';
import User from '../models/usermodel.js';

const protectRoute = async(req,res,next) =>{
    try {
        const token =req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"No token, authorization denied"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.status(401).json({error:"Token is not valid"})
        }
        //userId because we have called it when we sign the token
        const user = await User.findById(decoded.userId).select("-password") ;//remove the password 

        if(!user){
            return res.status(401).json({error:"User not found"});
        }
        
        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protectRoute",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

export default protectRoute;