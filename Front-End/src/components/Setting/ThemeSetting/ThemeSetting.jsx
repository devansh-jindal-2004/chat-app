import React from 'react';
import { useThemeContext } from '../../../context/ThemeContext';
import useAuthTheme from '../../../hooks/useAuthTheme';
import { useNavigate } from 'react-router-dom';

function ThemeSetting() {
    const { Themes } = useThemeContext();
    const {editTheme} = useAuthTheme()
    const navigate = useNavigate();
   

    const handletheme = async (theme) => {
        const themeName = theme.name;
            await editTheme(themeName)
            navigate("/")
    
    }

    const handleEmptyTheme = async()=>{
        const themeName = "";
            await editTheme(themeName)
            navigate("/")
    }

    return (
        <div className='w-full min-h-screen  bg-[#153548] flex  flex-col  items-center p-4'>
            <h1 className='   font-serif  text-xl md:text-3xl text-center  mt-4 mb-6 text-[#ddd9d9] '>Select your Desire Theme </h1>
            <div className='w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {Themes.map((theme) => (
                    <div key={theme.name} className='bg-white rounded-lg shadow-md p-4 flex flex-col items-center'>
                        <img 
                            src={theme.src} 
                            alt={theme.name} 
                            className='w-32 h-32 object-cover rounded-md mb-4'
                        />
                        <button 
                            onClick={() => handletheme(theme)} 
                            className={`px-4 py-2 rounded-lg bg-[#153548] hover:bg-[#1c5072] text-white  `}
                        > 
                            Select
                        </button>
                    </div>
                ))}
            </div>
            <button className=' bg-white text-[#153448] hover:text-white  hover:border hover:bg-[#153448] px-4 py-2  mt-20  rounded-lg' onClick={handleEmptyTheme}> Default Theme</button>
        </div>
    );
}

export default ThemeSetting;
