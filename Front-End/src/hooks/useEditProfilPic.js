import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

const useEditProfilePic = () =>{

    const [loading , setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const editProfilePic = async ({image})=>{
        setLoading(true)

        try {

            const res = await fetch(`http://localhost:8000/api/auth/update/profilePic`, {
                method: "POST",
                credentials: "include", // Include cookies in request
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({image}),
              });

              const newImage = res.json();
              console.log("new image data-->",newImage);
            //   setAuthUser(newImage)

            
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    return {editProfilePic ,loading}
}

export default useEditProfilePic;