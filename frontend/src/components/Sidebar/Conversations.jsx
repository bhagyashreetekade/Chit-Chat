import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const {loading,conversations} = useGetConversations();
  console.log(conversations)
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>

      { (conversations?.users?.map((conversation,idx) => (
        <Conversation key={conversation._id}
        conversation={conversation}
        emoji = {getRandomEmoji()}
        //this last index is maintain because we do not have to add the divider at the last conversation
        lastIndx = {idx === conversations?.users?.length - 1}
        />
      )))}

      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations


//started code
// const Conversations = () => {
//     return (
//       <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//       </div>
//     )
//   }
  
//   export default Conversations