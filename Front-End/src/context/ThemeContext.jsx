import { createContext, useContext, useState } from "react";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"

 export const ThemeContext = createContext();
 
 export const useThemeContext = () =>{
    return useContext(ThemeContext);
}

 export const ThemeProvider = ({children})=>{
    const [Themes , setTheme] = useState(
       [
        {name: "img1", src: img1 },
        { name: "img2",src: img2 },
        { name: "img3",src: img3 },
        { name: "img4",src: img4}
       ]
    )

    return <ThemeContext.Provider value={{Themes,setTheme}}> {children} </ThemeContext.Provider>
}