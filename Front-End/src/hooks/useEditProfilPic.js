import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useEditProfilePic = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser,authUser } = useAuthContext();

  console.log(authUser);

  const editProfilePic = async (image) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image);

      const res = await fetch("http://localhost:8000/api/auth/update/profilePic", {
        method: "POST",
        credentials: "include", // Include cookies in request
        body: formData,
      });

      if (res.ok) {
        const newData = await res.json();
        console.log(newData);
     
        setAuthUser(newData);
      } else {
        const errorText = await res.text();
        console.error("Failed to upload image:", errorText);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { editProfilePic, loading };
};

export default useEditProfilePic;
