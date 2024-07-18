import React, { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import ProfileImgSetting from '../ProfileImgSetting/ProfileImgSetting';
import Input from '../Input';
import { Link } from 'react-router-dom';
import useEditAuthUser from '../../hooks/useEditAuthUser';


function Setting() {
  const { authUser, setAuthUser } = useAuthContext();
  const [notEditable, setNotEditable] = useState(true);
  const [userName, setUserName] = useState(authUser.userName);
  const [fullName, setFullName] = useState(authUser.fullName);

  const { editAuthUser, loading } = useEditAuthUser();

  

const handleOnclick = async ()=>{
  setNotEditable((prev)=> !prev)
  if (!notEditable) {
    setNotEditable(true);
    await editAuthUser({ userName, fullName });
    
   
  }
};

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm absolute top-12 right-0 z-50">
      <ProfileImgSetting />

      

      
        <button
          onClick={handleOnclick}
          className="rounded-xl px-4 py-2 border text-[#153448] md:text-lg relative left-64"
        >
          {notEditable ? (<i className="fa-solid fa-pen"></i>) : '✔ Save'}
        </button>
        <Input
          label="Username"
          type="text"
          className="outline-none border rounded-lg"
          value={userName}
          readOnly={notEditable}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          label="FullName"
          type="text"
          className="outline-none border rounded-lg"
          value={fullName}
          readOnly={notEditable}
          onChange={(e) => setFullName(e.target.value)}
        />
      

      <Link to="/theme">
        <p className='bg-[#153448] text-white py-2 px-3 text-lg rounded-lg'>Theme</p>
      </Link>
    </div>
  );
}

export default Setting;
