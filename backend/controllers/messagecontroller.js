import { response } from "express";
import Conversation from "../models/conversionmodel.js";
import Message from "../models/messagemodel.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id; 

        let conversation = await Conversation.findOne({
            participants:{ $all:[senderId,receiverId]},
        })

        //if message is sending first time then create the conversation
        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,receiverId],
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message   
        })
        
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //saving the changes in db
        // await conversation.save();
        // await newMessage.save();

        //this will run in parallel ,this will run in minimum interval
        await Promise.all([conversation.save(),newMessage.save()]);

        //SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);

        //if receiverSocketId is not undefined then check it is online
        if(receiverSocketId){

            //io.to<socket_id>.emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }

        res.status(201).json(newMessage);

    }
    catch (error) {
        console.log("Error in sendMessage controller",error.message);
        res.status(500).json({error:"Internal sever error"})
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{ $all:[senderId,userToChatId]},
        }).populate("messages");  //populate to get messages not reference

        if(!conversation){
            return res.status(200).json([]);
        }

        const messages = conversation.messages
        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller",error.message);
        res.status(500).json({error:"Internal sever error"})
    }
}

