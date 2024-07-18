import React from 'react';
import { useId } from 'react';
import "../index.css"

function Input({ className = "", label, placeholder = "", type = "text", icon, iconColor, checked, onChange, ...props }, ref) {
    const uniqueId = useId();

    if (type === 'checkbox') {
        return (
            <div className="">
                <label htmlFor={uniqueId} className="text-lg font-medium text-gray-700 mb-2 block">
                    <input
                        id={uniqueId}
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        {...props}
                        ref={ref}
                        className={`mr-2`}
                    />
                    {label}
                </label>
            </div>
        );
    }

    return (
        <div className="mb-3">
            {label && (
                <label htmlFor={uniqueId} className="text-lg font-medium text-gray-700 mb-2 block">
                    {label}
                </label>
            )}
            <div className='flex'>
                {icon && (
                    <span className={`${iconColor}`}><i className={`${icon} text-xl border-r-2 py-1 px-3 custom-border`}></i></span>
                )}
                <input
                    className={`${className} px-4 py-2 rounded-lg rounded-l-none bg-gray-200 shadow-neumorphism-input text-gray-800 outline-none focus:bg-white border border-gray-300 w-full`}
                    id={uniqueId}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    {...props}
                    
                    ref={ref}
                />
            </div>
        </div>
    );
}

export default React.forwardRef(Input);
