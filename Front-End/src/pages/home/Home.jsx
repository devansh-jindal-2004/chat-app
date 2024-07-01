import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messagebox/MessageContainer'
import NoChatSelected from '../../components/messagebox/NoChatSelected'

export default function Home() {
  return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}


// starter code

// import React from 'react'
// import Sidebar from '../../components/sidebar/Sidebar'
// import MessageContainer from '../../components/messagebox/MessageContainer'

// export default function Home() {
//   return (
//         <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <Sidebar />
//             <MessageContainer />
//         </div>
//     )
// }