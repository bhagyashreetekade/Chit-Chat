import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';

const Message = ({message}) => {

  //check the message is from us or other user
  const {authUser} = useAuthContext();
  console.log(authUser)
  const {selectedConversation} = useConversation();
  const isFromMe = message.senderId === authUser._id;
  const chatClassName = isFromMe ? 'chat-end' : 'chat-start';
  const profilePicture = isFromMe ? authUser.profilePicture : selectedConversation?.profilePicture;
  const bubbleBgColor = isFromMe ? 'bg-orange-600' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src={profilePicture} alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} `}>
        {message.message}
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        11:10
      </div>
    </div>
  )
}

export default Message
