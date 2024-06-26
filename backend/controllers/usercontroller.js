import User from "../models/usermodel.js";

export const getUsersForSidebar =async(req,res) =>{

    try {
        const loggedInUserId = req.user._id;
        //here we are not added ourselft in the list ,you want to send msg to yourself you can add it
        const filterUsers = await User.find({_id: {$ne : loggedInUserId}}).select("-password");
        res.status(200).json({users:filterUsers});

    } catch (error) {
        console.log("Error in getUsersForSidebar",error.message);
        res.status(500).json({error:"Internal server error"});
    }
};