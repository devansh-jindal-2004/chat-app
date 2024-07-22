import React from 'react'
import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useEditProfilePic from '../../hooks/useEditProfilPic';


function ProfileImgSetting() {
  const { authUser } = useAuthContext();
  const {editProfilePic} = useEditProfilePic();
  

  const handleProfilePicChange = async (e) => {
    const image = e.target.files[0];
    console.log("image-->",image);
    if (image) {
      await editProfilePic({image})
    }
  };
  return (
    <>
      <div className="relative w-[30%] mx-auto">
        <input
          type="file"
          id="img"
          className="hidden"
          onChange={handleProfilePicChange}
          accept="image/*"
        />
        <img
          src={authUser.profilePic}
          alt={authUser.fullName}
          className="w-full rounded-full"
        />
        <label
          htmlFor="img"
          className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow cursor-pointer"
        >
          <i className="fa-solid fa-camera text-gray-500 text-xl"></i>
        </label>
      </div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {authUser.fullName}
      </h2>
    </>
  )
}

export default ProfileImgSetting