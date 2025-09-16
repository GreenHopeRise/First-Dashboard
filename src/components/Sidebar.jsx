import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="bg-gray-900 w-64 h-screen text-gray-100 p-4 fixed top-0 left-0 shadow-lg">
    <div className="px-6 py-4 border-b border-gray-700">
      <h1 className="text-2xl font-bold">Admin Panel</h1>
    </div>
    <nav className="mt-6 flex flex-col gap-2 px-4">
      <Link to="/" className="block py-2 px-3 rounded hover:bg-gray-700">Dashboard</Link>
      <Link to="/users" className="block py-2 px-3 rounded hover:bg-gray-700">Users</Link>
      <Link to="/products" className="block py-2 px-3 rounded hover:bg-gray-700">Products</Link>
      <Link to="/setting" className="block py-2 px-3 rounded hover:bg-gray-700">Setting</Link>
    </nav>
  </div>
);

export default Sidebar;