import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useEditProfilePic from "../../hooks/useEditProfilPic.js";

function ProfileImgSetting() {
  const { authUser } = useAuthContext();
  const { editProfilePic, loading } = useEditProfilePic();


  const handleProfilePicChange = async (e) => {
    const image = e.target.files[0];
     await editProfilePic(image);
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
          src={authUser.profilePic.url}
          alt={authUser.fullName}
          className="w-full rounded-full "
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
      {loading && <p className="text-center">Uploading...</p>}
    </>
  );
}

export default ProfileImgSetting;






// import React from 'react';
// import { useAuthContext } from '../../context/AuthContext';
// // import useEditProfilePic from '../../hooks/useEditProfilePic';
// import useEditProfilePic from "../../hooks/useEditProfilPic.js"

// function ProfileImgSetting() {
//   const { authUser } = useAuthContext();
//   const { editProfilePic, loading } = useEditProfilePic();

//   const handleProfilePicChange = async (e) => {
//     const image = e.target.files[0];
//     console.log("Selected image -->", image);
//     if (image) {
//       try {
//         await editProfilePic(image); // Pass image directly, not as an object
//       } catch (error) {
//         console.error("Error updating profile picture:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="relative w-[30%] mx-auto">
//         <input
//           type="file"
//           id="img"
//           className="hidden"
//           onChange={handleProfilePicChange}
//           accept="image/*"
//         />
//         <img
//           src={authUser.profilePic.url}
//           alt={authUser.fullName}
//           className="w-full rounded-full "
//         />
//         <label
//           htmlFor="img"
//           className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow cursor-pointer"
//         >
//           <i className="fa-solid fa-camera text-gray-500 text-xl"></i>
//         </label>
//       </div>
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         {authUser.fullName}
//       </h2>
//       {loading && <p className="text-center">Uploading...</p>}
//     </>
//   );
// }

// export default ProfileImgSetting;
