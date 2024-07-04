import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../store/useConversation.js';

function Conversations() {
    const { loading } = useGetConversations();
    let {conversations} = useConversation();

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}
            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
        </div>
    );
}

export default Conversations;



// starter code

// import React from 'react'
// import Conversation from './Conversation'

// function Conversations() {
//   return (
//     <div className=' py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//     )
// }

// export default Conversations