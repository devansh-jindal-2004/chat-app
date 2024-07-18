import React, { useState } from 'react';
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";

function ThemeSetting() {
    const [selectimg, setSelectImg] = useState("");
    const images = [
        {
            name: "img1",
            src: img1
        },
        {
            name: "img2",
            src: img2
        },
        {
            name: "img3",
            src: img3
        },
        {
            name: "img4",
            src: img4
        }
    ];

    const handleSelect = (image) => {
        setSelectImg(image.src);
        console.log(selectimg);
    };

    return (
        <div className='w-full h-screen flex flex-wrap'>
            {images.map((image) => (
                <div key={image.name} className='w-1/2 p-2 flex flex-col items-center'>
                    <div className='border w-full md:w-[70%]  flex flex-col items-center p-1 md:p-4'>
                        <img src={image.src} alt={image.name} className='h-40 w-40 md:h-48 md:w-48  lg:h-72 lg:w-72 object-cover' />
                        <button className='px-4 mx-auto py-2 mt-2 text-white bg-[#153448] rounded-lg' onClick={() => handleSelect(image)}>
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ThemeSetting;
