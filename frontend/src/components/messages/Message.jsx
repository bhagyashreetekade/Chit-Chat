import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src="" alt="" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-orange-600`}>
        Hii! What's up?
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        11:10
      </div>
    </div>
  )
}

export default Message
