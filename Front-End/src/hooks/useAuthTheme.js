import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useAuthTheme = ()=>{
const [loading , setloading]= useState(false);
const {setAuthUser} = useAuthContext();

  const editTheme = async (theme)=>{
    setloading(true)
    try {
        const res = await fetch("http://localhost:8000/api/auth/update/theme", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({theme})
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
  
  
        const newData = await res.json()
        localStorage.setItem("chat-user", JSON.stringify(newData))
        setAuthUser(newData)

    } catch (error) {
        toast.error(error);
    }finally{
        setloading(false)
    }
  }

return {editTheme , loading}
}

export default useAuthTheme;