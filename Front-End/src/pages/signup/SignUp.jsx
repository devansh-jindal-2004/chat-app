import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.js';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input.jsx';

export default function SignUp() {
    const { register, handleSubmit, setValue } = useForm();
    const { loading, signup } = useSignup();
    const [selectedGender, setSelectedGender] = useState('');

    const handleGenderChange = (value) => {
        setSelectedGender(value);
        setValue('gender', value); 
    };

    const handleSubmit2 = async (data) => {
        await signup(data);
    };

    return (
        <div className='flex flex-col w-full items-center justify-center min-h-screen p-4 bg-gray-200'>
            <div className='w-full min-h-[500px] max-w-2xl p-8 rounded-lg bg-gray-200 shadow-neumorphism'>
                <h1 className='text-3xl font-bold text-center mt-28 md:mt-0 text-gray-800 mb-6'>
                    Sign Up <span className='text-green-400'>ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit(handleSubmit2)} className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10'>
                    <div className='flex flex-col'>
                        <Input
                            className="mb-3"
                            label="Full Name"
                            placeholder="Enter Full Name"
                            type="text"
                            icon="fa-regular fa-circle-user"
                            iconColor=" text-blue-400"
                            {...register("fullName", { required: true })}
                        />
                        <Input
                            className="mb-3"
                            label="Username"
                            placeholder="Enter Username"
                            type="text"
                            icon="fa-regular fa-user"
                            {...register("userName", { required: true })}
                        />
                        <Input
                            className="mb-3"
                            label="Password"
                            placeholder="Enter Password"
                            type="password"
                            icon="fa-solid fa-key"
                            iconColor=" text-yellow-400"
                            {...register("password", { required: true })}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <Input
                            className="mb-3"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            type="password"
                            icon="fa-solid fa-unlock-keyhole"
                            iconColor=" text-green-400"
                            {...register("confirmPassword", { required: true })}
                        />
                        <div className='flex mb-3'>
                            <Input
                                className="mr-4"
                                label="Male"
                                type="checkbox"
                                checked={selectedGender === 'male'}
                                onChange={() => handleGenderChange('male')}
                            />
                            &nbsp;&nbsp;
                            <Input
                                className=""
                                label="Female"
                                type="checkbox"
                                checked={selectedGender === 'female'}
                                onChange={() => handleGenderChange('female')}
                            />
                            <input
                                type="hidden"
                                value={selectedGender}
                                {...register("gender", { required: true })}
                            />
                        </div>
                        <div className='col-span-1 md:col-span-2'>
                            <Link to="/login" className='text-md text-blue-500 mb-2 hover:underline hover:text-blue-600 mt-2 inline-block'>
                                Already have an account?
                            </Link>
                        </div>
                        <div>
                            <button type="submit" className='w-full py-2 px-4 rounded-lg text-white text-xl bg-green-400 shadow-neumorphism-button hover:bg-green-500 focus:ring-4 focus:ring-blue-300 transition-all duration-200' disabled={loading}>
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
