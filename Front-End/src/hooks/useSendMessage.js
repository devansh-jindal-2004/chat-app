import { useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";
import useMessage from "../store/useMessage";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();
  const { messages, setMessages} = useMessage()

  const sendMessage = async (message) => {
    if (!selectedConversation) {
      toast.error("No conversation selected");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/message/send/${selectedConversation._id}`, {
        method: "POST",
        credentials: "include", // Include cookies in request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      let newMessage = [...messages, data]

      setMessages(newMessage);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendMessage;
