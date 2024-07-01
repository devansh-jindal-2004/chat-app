import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className=' chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" alt="" />
            </div>
        </div>
        <div className=' chat-header  text-gray-200'>
            <span className=''>Devansh</span> &nbsp;
            <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className=' chat-bubble text-white bg-blue-500'> helloo</div>
    </div>
  )
}

export default Message


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