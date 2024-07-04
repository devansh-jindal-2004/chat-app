export const GenderCheck = ({ onCheckboxChange, selectedGender }) => {
    return (
      <div className='flex mt-2'>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
            <span className='label-text text-gray-200'>Male </span>
            <input type="checkbox" className='checkbox border-slate-900' checked={selectedGender === "male"} onChange={() => { onCheckboxChange("male") }} />
          </label>
        </div>
        <div className='form-control'>
          <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
            <span className='label-text text-gray-100'>Female </span>
            <input type="checkbox" className='checkbox border-slate-900' checked={selectedGender === "female"} onChange={() => { onCheckboxChange("female") }} />
          </label>
        </div>
      </div>
    )
  }
  


//starter code

// import React from 'react'

// export const GenderCheck = () => {
//   return (
//     <div className='flex mt-2'>
//         <div className='form-control'>
//             <label className='label gap-2 cursor-pointer'>
//                 <span className='label-text text-gray-200'>Male </span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//         <div className='form-control'>
//             <label className='label gap-2 cursor-pointer'>
//                 <span className='label-text text-gray-100'>Female </span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>
//     </div>
//   )
// }
