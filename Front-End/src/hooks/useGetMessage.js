import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import toast from "react-hot-toast";
import useMessage from "../store/useMessage";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { selectedConversation } = useConversation();
  const {messages, setMessages} = useMessage()

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:8000/api/message/${selectedConversation._id}`,
          {
            method: "GET",
            credentials: "include", // Include cookies in request
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch messages");
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  },[selectedConversation?._id, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
