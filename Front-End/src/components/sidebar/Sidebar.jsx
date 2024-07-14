import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

function Sidebar() {
  return (
    <div className='border-r bg-[#948979] h-screen border-slate-500 p-4 flex flex-col w-full md:w-1/3'>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
}

export default Sidebar;
