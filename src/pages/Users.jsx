import React, { useState } from "react";
import { users } from "../data/usersData";

const Users = () => {
  const [state, setState] = useState(users);
  const [sortAsc, setSortAsc] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const userPerPage = 10;
  const lastUserIndex = currentPage * userPerPage;
  const firstUserIndex = lastUserIndex - userPerPage;



// table sorting 
  const sortByName = () => {
    const sorted = [...state].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setState(sorted);
    setSortAsc(!sortAsc);
  };




  // Search or filtering 
  const filterUser = state.filter(
    (user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.email.toLowerCase().includes(query.toLowerCase())
  );


  
  const currentUsers = filterUser.slice(firstUserIndex, lastUserIndex);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [updateUserId, setUpdateUserId] = useState(null);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !email || !role) {
      alert("Please fill all fields");
      return;
    }
    if(updateUserId !== null){
      const updateUser = state.map((user)=>
        user.id === updateUserId ? { ...user,name,email,role } : user
        
      )
      setState(updateUser )
        setUpdateUserId(null)
        return
    }
    const newUser = {
      id: state.length + 1,
      name,
      email,
      role,
    };
    setState([newUser, ...state]);
    setName("");
    setEmail("");
    setRole("");
  };
  const handleDelete = (id) =>{
    const updateUser = state.filter((user)=>user.id !== id) 
    setState(updateUser)
  }

  // xml star here

  return (
    <div className="overflow-x-auto p-6 bg-gray-50 mt-3 rounded-lg shadow-md">
      <h2 className="font-bold text-3xl mb-6 text-gray-800">Users</h2>
      <input
        type="text"
        value={query}
        placeholder="Search by name or email"
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 px-4 py-3 mb-6 rounded-md transition duration-200"
      />
      <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
              Id
            </th>
            <th
              className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700 cursor-pointer select-none hover:text-blue-600 flex items-center gap-1"
              onClick={sortByName}
            >
              Name {sortAsc ? "↑" : "↓"}
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
              Role
            </th>
            <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className="text-gray-700 hover:bg-blue-50 transition-colors"
            >
              <td className="px-6 py-4 border-b border-gray-200">{user.id}</td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.name}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.email}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                {user.role}
              </td>
              <td className="px-6 py-4 border-b border-gray-200">
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setUpdateUserId(user.id);
                      setName(user.name);
                      setEmail(user.email);
                      setRole(user.role);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium shadow-sm"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors font-medium shadow-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 mt-6 justify-center items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Previous
        </button>
        
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(filterUser.length / userPerPage)}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            currentPage === Math.ceil(filterUser.length / userPerPage)
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          Next
        </button><span className="px-3 py-1 text-gray-700 font-semibold text-sm">
          {currentPage} / {Math.ceil(filterUser.length / userPerPage)}
        </span>
      </div>
      <div className="mt-8">
        <form
          onSubmit={handleAdd}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full sm:w-1/4"
          />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full sm:w-1/4"
          />
          <input
            type="text"
            placeholder="Enter Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full sm:w-1/4"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors w-full sm:w-auto"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default Users;