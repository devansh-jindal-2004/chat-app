import React, { useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';
import useConversation from '../../store/useConversation';
import Setting from '../Setting/Setting';


function MessageContainer() {
   
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [open, setOpen] = useState(false);
  const handleOnclick = () => {
    setSelectedConversation(null)
  }

  const handleMenuBtn = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='w-full h-screen md:w-2/3 flex flex-col bg-[#DFD0B8] overflow-hidden relative  '>
      {open ? <Setting /> : null}
      {!selectedConversation ? <NoChatSelected /> : (
        <>

          {/* header of message container */}
          <div className='bg-[#606676] flex  px-4 py-2   sticky top-0'>
            <div >
              <button onClick={handleOnclick} className=' md:hidden text-2xl text-[#DFD0B8]'><i className="fa-solid fa-arrow-left-long"></i></button>
            </div>
            <div className=' ms-10 flex'>
              <div className='w-12 rounded-full'>
                <img src={selectedConversation.profilePic} alt="useravatar" />
              </div>

              <span className='text-[#DFD0B8]  ps-4 pt-2 text-xl md:text-2xl text-center font-bold'>{selectedConversation.fullName}</span>
            </div>
        

          {/* this is setting icon */}
            <div>
              <button onClick={handleMenuBtn} className=' text-[#DFD0B8]  absolute right-4 text-xl md:top-3 top-4 md:right-6 md:text-3xl'><i className="fa-solid fa-gear"></i>
              </button>
            </div>
             
          </div>
         {/* header end of message container */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;
