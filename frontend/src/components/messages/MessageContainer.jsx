import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Ram Kapoor</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-300 px-4 py-2 mb-2">
            <span className="label-text text-black">To:</span>{" "}
            <span className="text-orange-500 font-bold">Ram Kapoor</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;




//Starter code

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'

// const MessageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//       <>
//       {/* Header */}
//       <div className='bg-slate-300 px-4 py-2 mb-2'>
//         <span className='label-text text-black'>To:</span>{" "}
//         <span className='text-orange-500 font-bold'>Ram Kapoor</span>
//       </div>
//       <Messages/>
//       <MessageInput/>
//       </>
//     </div>
//   )
// }

// export default MessageContainer
