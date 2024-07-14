import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useLogout } from "../../hooks/useLogout.js";

function LogoutButton() {
  const { loading, logout } = useLogout();
  return (
      <div className='mt-auto'>
       {!loading ? (
        <BiLogOut className='w-6 h-6 text-[#153448] cursor-pointer' onClick={logout}/>
       ):(
        <span className='loading loading-spinner'></span>
       )}
      </div>
  )
}

export default LogoutButton


//starter code

// import React from 'react'
// import { BiLogOut } from 'react-icons/bi'

// function LogoutButton() {
//   return (
//       <div className='mt-auto'>
//         <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
//       </div>
//   )
// }

// export default LogoutButton