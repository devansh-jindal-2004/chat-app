import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

export default function Login() {
    let [inputs, setInputs] = useState({
        userName: "",
        password: ""
    })

    const {loading, login} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
    };
  return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className=' w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className=' text-3xl font-semibold text-center text-gray-200'>
                    Login&nbsp;
                    <span className=' text-blue-500'>ChatApp</span>
                </h1>    
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className=' label p-2' >
                            <span className=' text-gray-300 label-text'>Username</span>
                        </label>
                        <input type="text" value={inputs.userName} placeholder='Enter Username' className=' w-full input input-bordered h-10' onChange={(e)=> setInputs({...inputs, userName:e.target.value})} />
                    </div>
                    <div>
                        <label className=' label p-2' >
                            <span className=' text-gray-300 label-text'>Password</span>
                        </label>
                        <input type="password" value={inputs.password} placeholder='Enter Password' className=' w-full input input-bordered h-10' onChange={(e)=> setInputs({...inputs, password:e.target.value})} />
                    </div>
                    <Link to="/signup" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
                        {"Don't"} have an account ?
                    </Link>
                    <div>
                    <button type='submit' className={`btn btn-block btn-sm mt-2 border border-slate-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}  disabled={loading} >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                    </div>
                </form>
            </div>    
        </div>
    )
}

// starter code

// import React from 'react'

// export default function Login() {
//   return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className=' w-full p-6 rounded-lg  shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className=' text-3xl font-semibold text-center text-gray-200'>
//                     Login&nbsp;
//                     <span className=' text-blue-500'>ChatApp</span>
//                 </h1>    
//                 <form>
//                     <div>
//                         <label className=' label p-2' >
//                             <span className=' text-gray-300 label-text'>Username</span>
//                         </label>
//                         <input type="text" placeholder='Enter Username' className=' w-full input input-bordered h-10' />
//                     </div>
//                     <div>
//                         <label className=' label p-2' >
//                             <span className=' text-gray-300 label-text'>Password</span>
//                         </label>
//                         <input type="password" placeholder='Enter Password' className=' w-full input input-bordered h-10' />
//                     </div>
//                     <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-400'>
//                         {"Don't"} have an account ?
//                     </a>
//                     <div>
//                         <button className='btn btn-block btn-sm mt-2'>Login</button>
//                     </div>
//                 </form>
//             </div>    
//         </div>
//     )
// }