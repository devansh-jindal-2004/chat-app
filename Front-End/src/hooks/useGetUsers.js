import { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../store/useConversation";

function useGetUsers() {
  const [loading, setLoading] = useState(false);
  const { setConversations } = useConversation();

  const getUsers = async (name) => {
    setLoading(true);
    let res;
    try {
      if (name) {
        res = await fetch(`/api/users/search/${name}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        res = await fetch('/api/users', {
          method: 'GET',
          credentials: 'include', // Include cookies in request
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      if (!data.length) {
        toast.error("No user found");
      } else {
        setConversations(data);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getUsers };
}

export default useGetUsers;
