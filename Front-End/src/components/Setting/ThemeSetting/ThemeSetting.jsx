import React from 'react';
import { useThemeContext } from '../../../context/ThemeContext';

function ThemeSetting() {
    const { Themes } = useThemeContext();
   

    const handletheme = (theme) => {
        const themeName = theme.name;
    }

    return (
        <div className='w-full min-h-screen bg-gray-100 flex justify-center items-center p-4'>
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
                            className={`px-4 py-2 rounded-lg `}
                        > 
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ThemeSetting;
