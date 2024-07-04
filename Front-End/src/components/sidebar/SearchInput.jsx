import React, { useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import useGetUsers from "../../hooks/useGetUsers";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { getUsers, loading } = useGetUsers();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    getUsers(search); 
  };

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-circle bg-sky-500 text-white"
          disabled={loading}
        >
          <IoSearchSharp className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
}

export default SearchInput;
