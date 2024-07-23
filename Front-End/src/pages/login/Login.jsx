import React from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import Input from '../../components/Input';
import { useForm } from 'react-hook-form';
import "../../index.css"

export default function Login() {
    const { register, handleSubmit } = useForm();
    const { loading, login } = useLogin();

    const handleForm = async (data) => {
        await login(data);
    };

    return (
        <div className="flex flex-col w-full items-center justify-center min-h-screen p-4  bg-gray-200">
            <div className="w-full max-w-md p-10 rounded-lg bg-gray-200 shadow-neumorphism">
                <h1 className=" text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                    Login <span className=" text-green-400">ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit(handleForm)}>
                    <Input
                        className="mb-6"
                        label="Username"
                        placeholder="Enter Username"
                        type="text"
                        icon="fa-regular fa-circle-user"
                        iconColor=" text-blue-400"
                        {...register("userName", { require: true })}
                    />
                    <Input
                        className="mb-5"
                        label="Password"
                        placeholder="Enter Password"
                        type="password"
                         icon ="fa-solid fa-unlock-keyhole"
                        iconColor=" text-green-400"
                        {...register("password", { require: true })}
                    />
                    <Link to="/signup" className="text-md  hover:underline hover:text-blue-600 block text-blue-500 mb-4">
                        {"Don't"} have an account?
                    </Link>
                    <button
                        type="submit"
                        className={`w-full py-3 px-4 rounded-lg text-white text-xl  bg-green-400 shadow-neumorphism-button hover:bg-green-500 focus:ring-4 focus:ring-blue-300 transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
}
