import React from 'react'
import { useState } from 'react';
import Setting from '../Setting';


function SettingBar({className}) {
    const [open, setOpen] = useState(false);

    const handleMenuBtn = () => {
        setOpen((prev) => !prev)
      }

  return (
    <>
    <button 
        onClick={handleMenuBtn} 
        className={`text-2xl text-white ${className}`}>
            <i className="fa-solid fa-gear"></i>
    </button>
    {open ? <Setting /> : null}
     </>
  )
}

export default SettingBar