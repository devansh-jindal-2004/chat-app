import React from 'react'
import { BsSend } from 'react-icons/bs'

function MessageInput() {
  return (
    <form className='px-4 my-3'>
  <div className='flex w-full relative bg-white rounded-2xl'>
    <input 
      type="text" 
      className='border text-sm rounded-2xl block w-full p-2.5 bg-white/20 outline-none text-black' 
      placeholder='Send a message' 
    />
    <button 
      type='submit' 
      className='flex items-center px-3 rounded-lg ml-2'
    >
      <BsSend />
    </button>
  </div>
</form>

  )
}

export default MessageInput


//starter code

// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// function MessageInput() {
//   return (
//     <form className='px-4 my-3'>
//   <div className='flex w-full relative bg-white rounded-2xl'>
//     <input 
//       type="text" 
//       className='border text-sm rounded-2xl block w-full p-2.5 bg-white/20 outline-none text-black' 
//       placeholder='Send a message' 
//     />
//     <button 
//       type='submit' 
//       className='flex items-center px-3 rounded-lg ml-2'
//     >
//       <BsSend />
//     </button>
//   </div>
// </form>

//   )
// }

// export default MessageInput