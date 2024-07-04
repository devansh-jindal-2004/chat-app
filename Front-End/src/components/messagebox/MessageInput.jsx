import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

function MessageInput() {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage('');
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="flex w-full relative bg-white rounded-2xl">
        <input
          type="text"
          className="border text-sm rounded-2xl block w-full p-2.5 bg-white/20 outline-none text-black"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center px-3 rounded-lg ml-2"
          disabled={loading} // Disable the button while loading
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  );
}

export default MessageInput;
