import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import ProfileImgSetting from '../ProfileImgSetting/ProfileImgSetting';
import Input from '../Input';
import {Link} from "react-router-dom"
import useEditAuth from '../../hooks/useEditAuth';

function Setting() {
  const { authUser } = useAuthContext();
  const [editable, setEditable] = useState(false);
  const [userName, setUserName] = useState(authUser.userName);
  const [fullName, setFullName] = useState(authUser.fullName);
  const {editAuth, loading} =  useEditAuth();

  const handleEditToggle = async () => {
    if(editable){
      setEditable(false);
      await editAuth({userName,fullName})
    } else {
      setEditable(true)
    }
    
  };

  return (
    <>
   
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm absolute top-12 right-0 z-50">
    <ProfileImgSetting />

       <button
        className="rounded-xl px-4 py-2 border  text-[#153448]  relative left-60"
        onClick={handleEditToggle}
      >
        {editable ?'✔ Save': (<i className="fa-solid fa-pen"></i>) }
      </button>
      <Input 
      label = "Username" 
      type = "text"  
      className="outline-none border" 
      value = {userName}
      readOnly={!editable}
      onChange={(e) => setUserName(e.target.value)} 
      />
      

      <Input 
      label = "FullName" 
      type = "text"  
      className="outline-none border" 
      value = {fullName}
      readOnly={!editable}
      onChange={(e) => setFullName(e.target.value)} 
      />

      <Link to = "/theme" className = "px-4 py-2 rounded-lg  bg-[#153448] text-white">  Theme</Link>
     
    </div>
     </>
  );
 
}

export default Setting;
