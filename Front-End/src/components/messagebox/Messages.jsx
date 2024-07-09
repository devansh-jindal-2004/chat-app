import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkelton from '../skelton/MessageSkelton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
  const { loading, messages } = useGetMessage();
  useListenMessages();
  const lastMsgRef = useRef();

  useEffect(()=>{
    lastMsgRef.current?.scrollIntoView({behavior: "smooth"})
  },[messages])
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
      <div key={message._id} ref={lastMsgRef}>
        <Message message={message} />
      </div>
      ))}
      {loading && (<><MessageSkelton /> <MessageSkelton /><MessageSkelton /> <MessageSkelton /><MessageSkelton /></>)}
      {!loading && messages.length == 0 && (<p className='text-center text-gray-200'>send a message to this conversation</p>)}
    </div>
  );
}

export default Messages;


// starter code

// import React from 'react'
// import Message from './Message'

// function Messages() {
//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//         <Message />
//     </div>
//   )
// }

// export default Messages