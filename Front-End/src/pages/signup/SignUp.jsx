import React from 'react'
import { GenderCheck } from './GenderCheck'

export default function SignUp() {
  return (
    <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            <h1 className='text-3xl font-semibold text-center text-gray-200'>
                Sign Up <span className='text-blue-500'>ChatApp</span>
            </h1>
            <form>
                <div>
                    <label className=' label p-2' >
                        <span className=' text-gray-300 label-text'>Full Name</span>
                    </label>
                    <input type="text" placeholder='Enter Full Name' className=' w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className=' label p-2' >
                        <span className=' text-gray-300 label-text'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter Username' className=' w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className=' label p-2' >
                        <span className=' text-gray-300 label-text'>Password</span>
                    </label>
                    <input type="password" placeholder='Enter Password' className=' w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className=' label p-2' >
                        <span className=' text-gray-300 label-text'>Confirm Password</span>
                    </label>
                    <input type="password" placeholder='Confirm Password' className=' w-full input input-bordered h-10' />
                </div>
                <GenderCheck />

                <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
                    Already have an account ?
                </a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}


//starter code

// import React from 'react'
// import { GenderCheck } from './GenderCheck'

// export default function SignUp() {
//   return (
//     <div className=' flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//             <h1 className='text-3xl font-semibold text-center text-gray-200'>
//                 Sign Up <span className='text-blue-500'>ChatApp</span>
//             </h1>
//             <form>
//                 <div>
//                     <label className=' label p-2' >
//                         <span className=' text-gray-300 label-text'>Full Name</span>
//                     </label>
//                     <input type="text" placeholder='Enter Full Name' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className=' label p-2' >
//                         <span className=' text-gray-300 label-text'>Username</span>
//                     </label>
//                     <input type="text" placeholder='Enter Username' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className=' label p-2' >
//                         <span className=' text-gray-300 label-text'>Password</span>
//                     </label>
//                     <input type="password" placeholder='Enter Password' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <div>
//                     <label className=' label p-2' >
//                         <span className=' text-gray-300 label-text'>Confirm Password</span>
//                     </label>
//                     <input type="password" placeholder='Confirm Password' className=' w-full input input-bordered h-10' />
//                 </div>
//                 <GenderCheck />

//                 <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
//                     Already have an account ?
//                 </a>
//                 <div>
//                     <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }