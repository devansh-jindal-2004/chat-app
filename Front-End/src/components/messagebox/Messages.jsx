import React, { useEffect, useRef, useCallback } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkelton from '../skelton/MessageSkelton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
  const { loading, messages } = useGetMessage();
  useListenMessages();
  const lastMsgRef = useRef(null); // Initialize with null

  const scrollToBottom = useCallback(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom on initial load
  }, [scrollToBottom]);

  useEffect(() => {
    scrollToBottom(); // Scroll to bottom whenever messages change
  }, [scrollToBottom, messages]);

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
      <div ref={lastMsgRef}></div> {/* Empty div to set ref for scrolling */}
    </div>
  );
}

export default Messages;
