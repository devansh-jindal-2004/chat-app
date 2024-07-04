import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: 'include',
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Logout successful!");
                localStorage.removeItem("chat-user");
                setAuthUser(null);
                

            } else {
                toast.error(data.message || "Logout failed!");
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}


