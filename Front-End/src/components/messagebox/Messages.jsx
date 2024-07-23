import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessage from '../../hooks/useGetMessage.js';
import MessageSkelton from '../skelton/MessageSkelton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';
import { useAuthContext } from '../../context/AuthContext';
import { useThemeContext } from '../../context/ThemeContext';

function Messages() {
  const {authUser} = useAuthContext();
   const {Themes} = useThemeContext();

   const bgTheme = authUser.theme && authUser.theme;
   
  const themeSrc = Themes.find((theme) => theme.name === bgTheme)?.src;
     console.log("themesrc-->",themeSrc);

  const { loading, messages } = useGetMessage();
  useListenMessages();
  const lastMsgRef = useRef();

  useEffect(()=>{
    lastMsgRef.current?.scrollIntoView({bahavior: "smooth"})
  },[messages])
  
  return (
    <div 
    className={`px-4 flex-1  overflow-scroll ${themeSrc ? "" : " bg-[#708871]"}`}
    style={{
      backgroundImage : themeSrc ? `url(${themeSrc})`:`none`,
      backgroundSize: 'cover',
       backgroundPosition: 'center'
    }}>

      {!loading && messages.length > 0 && messages.map((message) => (
      <div key={message._id} ref={lastMsgRef}>
        <Message message={message} />
      </div>
      ))}
      {loading && (<><MessageSkelton /> <MessageSkelton /><MessageSkelton /> <MessageSkelton /><MessageSkelton /></>)}
      {!loading && messages.length == 0 && (
        <p className='mt-[15%] text-center text-[#153448] pt-6'>
          <span className=' text-2xl text-[#153448]'>Welcome 👋</span>Send a message to this conversatio
        </p>)}
    </div>
  );
}

export default Messages;


