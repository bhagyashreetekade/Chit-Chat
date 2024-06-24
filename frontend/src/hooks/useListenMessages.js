import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversation from '../zustand/useConversation';
import notificationSound from "../assets/sound/notification.mp3"

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversation();
  
  useEffect(()=>{

    socket?.on("newMessage",(newMessage) =>{
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages,newMessage]);

    })

    //if we dont add this line then we would have lot of event listening from our socket whenever new message is send we will hear that notification sound multiple times
    return()=> socket?.off("newMessage");
  },[socket,setMessages,messages])
 }

export default useListenMessages
