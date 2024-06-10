import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res) =>{

    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'15d'});

    res.cookie("jwt",token,{
        //15 days in milliseconds format
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,   //prevent  XSS attacks cross site scrpting attacks
        sameSite :"strict", //CSRF attacks cross-site request forgery attcks
        secure: true
    })
}

export default generateTokenAndSetCookie;