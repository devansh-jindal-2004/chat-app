import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useEditAuth = () =>{
    const [loading , setLoading ] = useState(false);
    const {setAuthUser} = useAuthContext();
    

    const editAuth =  async ({userName, fullName})=>{
            setLoading(true)
        try {
            const res = await fetch(`/api/auth/update`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName, fullName }),
              });
            
            const newdata = await res.json();
            localStorage.setItem("chat-user", JSON.stringify(newdata))
            setAuthUser(newdata)

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
      
       
    }

    return {editAuth , loading}
}

export default useEditAuth;