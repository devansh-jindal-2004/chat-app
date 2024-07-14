import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';
import useConversation from '../../store/useConversation';

function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  // useEffect(() => {
  //   return () => setSelectedConversation(null);
  // }, []);

  const handleOnclick = () => {
    setSelectedConversation(null)
  }

  return (
    <div className='w-full h-screen md:w-2/3 flex flex-col bg-[#DFD0B8] overflow-hidden '>
      {!selectedConversation ? <NoChatSelected /> : (
        <>

          <div className='bg-[#3C5B6F] px-4 py-2 mb-2  sticky top-0'>
            <button onClick={handleOnclick} className=' md:hidden text-2xl text-[#DFD0B8]'><i className="fa-solid fa-arrow-left-long"></i></button>
            <span className='label-text text-2xl text-[#DFD0B8] ms-10'>To: </span>
            <span className='text-[#DFD0B8] text-2xl font-bold'>{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
