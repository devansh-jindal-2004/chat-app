import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useEditAuthUser = () => {
    const {setAuthUser} = useAuthContext();
  const [loading, setLoading] = useState(false);

  const editAuthUser = async ({ userName, fullName, profilePic }) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/auth/update`, {
        method: "POST",
        credentials: "include", // Include cookies in request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, fullName, profilePic }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      } else {
        localStorage.setItem("chat-user", JSON.stringify(data))
        setAuthUser(data)
        
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { editAuthUser, loading };
};

export default useEditAuthUser;
