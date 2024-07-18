import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useGetUsers from "../../hooks/useGetUsers";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { getUsers, loading } = useGetUsers();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers(search); 
    setSearch("")
  };

  return (
    <div className=' '>
      <form className="flex w-full  " onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className=" w-full md:w-[80%] py-3 px-5 rounded-l-md outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="text-center md:text-2xl md:w-[20%]  rounded-e-md text-white bg-[#3b8ec5] hover:bg-[#2b6388]"
          disabled={loading}
        >
          <IoSearchSharp className="w-7 h-7  mx-3  outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
