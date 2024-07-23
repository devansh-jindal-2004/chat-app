import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messagebox/MessageContainer'
import NoChatSelected from '../../components/messagebox/NoChatSelected'
import useConversation from '../../store/useConversation'
// import Setting from '../../components/Setting/Setting'

export default function Home() {

    const { selectedConversation } = useConversation();

    return (
        <>
                {/* it will render on lablet and laptop screen */}
            <div className=' md:px-4  hidden md:flex h-screen  w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <Sidebar />
                <MessageContainer />
            </div>

                {/* it will render on mobile screen */}
            <div className=' md:hidden h-screen  w-full rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                {!selectedConversation ? (<Sidebar />) : (<MessageContainer />)}
            </div>
          
        </>
    )
}

