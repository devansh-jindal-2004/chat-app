import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useEditProfilePic = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser,authUser } = useAuthContext();


  const editProfilePic = async (image) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch("/api/auth/update/profilePic", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const newData = await res.json();
        
         localStorage.setItem("chat-user", JSON.stringify(newData))
         setAuthUser(newData);
       
      } else {
        const errorText = await res.text();
         toast.error("Failed to upload image:", errorText);
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { editProfilePic, loading };
};

export default useEditProfilePic;
