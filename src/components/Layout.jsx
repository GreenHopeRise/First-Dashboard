import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Products from "../pages/Products";
import Setting from "../pages/Setting";

const Layout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 ml-64">
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="pt-16 p-4 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Layout;