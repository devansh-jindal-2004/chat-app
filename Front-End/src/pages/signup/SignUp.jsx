import React, { useState } from 'react';
import { GenderCheck } from './GenderCheck';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';

export default function SignUp() {
    let [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs(prevInputs => ({
            ...prevInputs,
            gender
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-200'>
                    Sign Up <span className='text-blue-500'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-gray-300 label-text'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-gray-300 label-text'>Username</span>
                        </label>
                        <input
                            type="text"
                            value={inputs.userName}
                            placeholder='Enter Username'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-gray-300 label-text'>Password</span>
                        </label>
                        <input
                            type="password"
                            value={inputs.password}
                            placeholder='Enter Password'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-gray-300 label-text'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            value={inputs.confirmPassword}
                            placeholder='Confirm Password'
                            className='w-full input input-bordered h-10'
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>
                    <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    
                    <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
                        Already have an account?
                    </Link>
                    <div>
                        <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}


// import React, { useState } from 'react';
// import { GenderCheck } from './GenderCheck';
// import { Link } from 'react-router-dom';
// import useSignup from '../../hooks/useSignup.js';

// export default function SignUp() {
//     let [inputs, setInputs] = useState({
//         fullName: "",
//         userName: "",
//         password: "",
//         confirmPassword: "",
//         gender: ""
//     });

//     const { loading, signup } = useSignup();

//     const handleCheckboxChange = (gender) => {
//         setInputs(prevInputs => ({
//             ...prevInputs,
//             gender
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         await signup(inputs);
//     };

//     return (
//         <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//             <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-200'>
//                     Sign Up <span className='text-blue-500'>ChatApp</span>
//                 </h1>
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-gray-300 label-text'>Full Name</span>
//                         </label>
//                         <input
//                             type="text"
//                             placeholder='Enter Full Name'
//                             className='w-full input input-bordered h-10'
//                             value={inputs.fullName}
//                             onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-gray-300 label-text'>Username</span>
//                         </label>
//                         <input
//                             type="text"
//                             value={inputs.userName}
//                             placeholder='Enter Username'
//                             className='w-full input input-bordered h-10'
//                             onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-gray-300 label-text'>Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             value={inputs.password}
//                             placeholder='Enter Password'
//                             className='w-full input input-bordered h-10'
//                             onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
//                         />
//                     </div>
//                     <div>
//                         <label className='label p-2'>
//                             <span className='text-gray-300 label-text'>Confirm Password</span>
//                         </label>
//                         <input
//                             type="password"
//                             value={inputs.confirmPassword}
//                             placeholder='Confirm Password'
//                             className='w-full input input-bordered h-10'
//                             onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
//                         />
//                     </div>
//                     <GenderCheck onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
                    
//                     <Link to="/login" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-gray-100'>
//                         Already have an account?
//                     </Link>
//                     <div>
//                         <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
//                             {loading ? 'Signing Up...' : 'Sign Up'}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
