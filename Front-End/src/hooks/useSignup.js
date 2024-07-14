import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import useConversation from "../store/useConversation";


function useSignup() {

    const {setSelectedConversation}= useConversation();
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext()

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputError({ fullName, userName, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            if (res.ok) {
                toast.success("Signup successful!");
                setSelectedConversation(null)
            } else {
                toast.error(data.message || "Signup failed!");
            }

            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}

export default useSignup;

function handleInputError({ fullName, userName, password, confirmPassword, gender }) {
    if (!fullName || !userName || !password || password !== confirmPassword || !gender) {
        toast.error("Please fill all fields correctly.");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters.");
        return false;
    }

    return true;
}
