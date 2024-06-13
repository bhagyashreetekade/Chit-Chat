import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
      {/* Header */}
      <div className='bg-slate-300 px-4 py-2 mb-2'>
        <span className='label-text text-black'>To:</span>{" "}
        <span className='text-orange-500 font-bold'>Ram Kapoor</span>
      </div>
      <Messages/>
      <MessageInput/>
      </>
    </div>
  )
}

export default MessageContainer
