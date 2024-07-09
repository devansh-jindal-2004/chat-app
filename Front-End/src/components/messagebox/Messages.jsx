import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkelton from '../skelton/MessageSkelton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
  const { loading, messages } = useGetMessage();
  useListenMessages();
  const lastMsgRef = useRef();

  useEffect(() => {
    console.log("useEffect triggered"); // Add this log to see if useEffect is running
    if (lastMsgRef.current) {
      console.log("Scrolling to last message");
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("lastMsgRef.current is null");
    }
  }, [messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div key={message._id} ref={index === messages.length - 1 ? lastMsgRef : null}>
          <Message message={message} />
        </div>
      ))}
      {loading && (
        <>
          <MessageSkelton />
          <MessageSkelton />
          <MessageSkelton />
          <MessageSkelton />
          <MessageSkelton />
        </>
      )}
      {!loading && messages.length === 0 && (
        <p className='text-center text-gray-200'>Send a message to this conversation</p>
      )}
    </div>
  );
}

export default Messages;
