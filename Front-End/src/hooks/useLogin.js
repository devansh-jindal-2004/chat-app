import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../store/useConversation";

function useLogin(){
    const {setSelectedConversation} = useConversation();
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const login = async({userName, password})=>{
        
        const sucess = handelInputError({userName, password})
        if(!sucess) return

        setLoading(true)
        try {
            const res = await fetch("http://localhost:8000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({ userName, password })
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            if (res.ok) {
                toast.success("Login successful!");
                setSelectedConversation(null)
            } else {
                toast.error(data.message || "Login failed!");
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message)
        } finally{
            setLoading(false)
        }

    }

    return {loading, login}
}

export default useLogin;

function handelInputError({userName, password}){
    if(!userName || !password){
        toast.error("please fill all the fields")
        return false
    }
    return true
}