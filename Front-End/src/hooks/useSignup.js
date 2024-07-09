import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

function useSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext()

    const signup = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleInputError({ fullName, userName, password, confirmPassword, gender });
        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, userName, password, confirmPassword, gender })
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            if (res.ok) {
                toast.success("Signup successful!");
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
