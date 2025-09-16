import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-64 right-0 h-16 bg-gray-100 border-b border-gray-300 shadow flex items-center px-6 z-10">
      <h1 className="font-bold text-2xl flex-1">Admin Panel</h1>
      <div className="flex gap-4">
        <button className="px-3 rounded-md text-white bg-blue-500">LogIn</button>
        <button className="px-3 rounded-md text-white bg-blue-500">SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;