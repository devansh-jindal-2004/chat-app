import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import NoChatSelected from './NoChatSelected';
import useConversation from '../../store/useConversation';

function MessageContainer() {
  const {selectedConversation, setSelectedConversation} = useConversation();
  useEffect(()=>{
    return ()=> setSelectedConversation(null)
  },[])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
       {!selectedConversation ? <NoChatSelected />: <>
        <div className='bg-slate-500 px-4 py-2 mb-2'>
          <span className='label-text'>To: </span><span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
        </div>
        <Messages />
        <MessageInput />
      </>}
      
    </div>
  )
}

export default MessageContainer





//starter code

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import NoChatSelected from './NoChatSelected';

// function MessageContainer() {
//   const noChatSelected = true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//        {noChatSelected? <NoChatSelected />: <>
//         <div className='bg-slate-500 px-4 py-2 mb-2'>
//           <span className='label-text'>To: </span><span className='text-gray-900 font-bold'>Devansh</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </>}
      
//     </div>
//   )
// }

// export default MessageContainer


