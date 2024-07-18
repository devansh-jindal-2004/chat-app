import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import ProfileImgSetting from '../ProfileImgSetting/ProfileImgSetting';
import Input from '../Input';

function Setting() {
  const { authUser } = useAuthContext();
  const [notEditable, setNotEditable] = useState(true);
  const [userName, setUserName] = useState(authUser.userName);
  const [fullName, setFullName] = useState(authUser.fullName);

  const handleEditToggle = () => {
    setNotEditable((prev) => !prev);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm absolute top-12 right-0 z-50">
      <ProfileImgSetting />
     
       <button
        className="rounded-xl px-4 py-2 bg-[#153448] text-white right-0"
        onClick={handleEditToggle}
      >
        {notEditable ? 'Edit' : 'Save'}
      </button>
      <Input 
      label = "Username" 
      type = "text"  
      className="outline-none border" 
      value = {userName}
      readOnly={notEditable}
      onChange={(e) => setUserName(e.target.value)} 
      />
      

      <Input 
      label = "FullName" 
      type = "text"  
      className="outline-none border" 
      value = {fullName}
      readOnly={notEditable}
      onChange={(e) => setFullName(e.target.value)} 
      />
     
    </div>
  );
}

export default Setting;
