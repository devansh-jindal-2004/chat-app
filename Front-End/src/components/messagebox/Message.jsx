import React from 'react';
import { useAuthContext } from "../../context/AuthContext.jsx"
import useConversation from '../../store/useConversation';
import mongoose from 'mongoose';


const ObjectId = mongoose.Types.ObjectId;

const Message = ({ message }) => {
  // Assuming 'message' object contains properties like senderName, time, content, etc.
  const { senderId, createdAt, message:msg } = message;
  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  let fromMe = new ObjectId(senderId).equals(new ObjectId(authUser._id))
  const formattedTime = new Date(createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const shakeClass = message.shouldShake? "shake":""

  return (
    <div className={`chat ${fromMe?"chat-end":"chat-start"}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={fromMe?authUser.profilePic:selectedConversation.profilePic} alt="Avatar" />
        </div>
      </div>
      <div className='chat-header text-[#153448]'>
        <span>{fromMe? authUser.fullName:selectedConversation.fullName}</span>&nbsp;
        <time className="text-xs opacity-100">{formattedTime}</time>
      </div>
      <div className={`chat-bubble text-white ${fromMe?"bg-[#399cdd]":""} ${shakeClass}`}>{msg}</div>
    </div>
  );
};

export default Message;



//starter code 

// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className=' chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="" />
//             </div>
//         </div>
//         <div className=' chat-header  text-gray-200'>
//             <span className=''>Devansh</span> &nbsp;
//             <time className="text-xs opacity-50">12:46</time>
//         </div>
//         <div className=' chat-bubble text-white bg-blue-500'> helloo</div>
//     </div>
//   )
// }

// export default Message