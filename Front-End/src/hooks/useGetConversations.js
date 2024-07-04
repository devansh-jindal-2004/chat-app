import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../store/useConversation';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const { setConversations } = useConversation();

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch('http://localhost:8000/api/users', {
          method: 'GET',
          credentials: 'include', // Include cookies in request
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch conversations');
        }

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, [setConversations]); // Including setConversations in dependency array

  return { loading };
};

export default useGetConversations;
