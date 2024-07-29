import React ,{useState}from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';
import Setting from '../Setting/Setting';


function Sidebar() {

  const [open, setOpen] = useState(false);
  const handleMenuBtn = () => {
    setOpen((prev) => !prev)
  }
 

  return (
  
    <div className='border-r bg-[#BEC6A0] h-screen border-slate-500 p-4 flex flex-col w-full md:w-1/3'>
      <SearchInput />
      <div className='divider px-3 '></div>
      <Conversations />
      <div className=' mt-auto flex  justify-between'>
         <LogoutButton />
         <button onClick={handleMenuBtn} className=' md:hidden text-[#153448] text-2xl'><i className="fa-solid fa-gear"></i>
         </button>
        
        {open ? <Setting/> : null}
      
      </div>
    </div>
  );
}


export default Sidebar;
