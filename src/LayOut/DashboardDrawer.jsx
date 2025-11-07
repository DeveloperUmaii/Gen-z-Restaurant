import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUserAlt,
  FaBars,
  FaTimes,
  FaPlus,
  FaEdit,
  FaList,
  FaUsers,
  FaBook,
  FaShoppingBag,
  FaEnvelope,
} from "react-icons/fa";

const DashboardDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* 🔹 Drawer Toggle Button */}
      <button
        onClick={toggleDrawer}
        className="fixed top-4 left-4 z-50 text-yellow-900 bg-yellow-200 p-2 rounded-full shadow-md hover:bg-yellow-300 transition"
      >
        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* 🔹 Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-yellow-900 text-white shadow-xl transform transition-transform duration-300 ease-in-out 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 border-b border-yellow-800">
          <h1 className="text-xl font-bold tracking-wider">Gen-Z</h1>
          <p className="text-xs font-semibold text-yellow-300">RESTAURANT</p>
        </div>

        {/* Admin Section */}
        <div className="py-4">
          <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
            Admin Panel
          </h2>

          <Link to="/dashboard" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaHome className="mr-3" />
            <span>ADMIN HOME</span>
          </Link>

          <Link to="/additems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaPlus className="mr-3" />
            <span>ADD ITEMS</span>
          </Link>

          <Link to="/manageitems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaEdit className="mr-3" />
            <span>MANAGE ITEMS</span>
          </Link>

          <Link to="/managebookings" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaBook className="mr-3" />
            <span>MANAGE BOOKINGS</span>
          </Link>

          <Link to="/users" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaUsers className="mr-3" />
            <span>ALL USERS</span>
          </Link>
        </div>

        <hr className="border-yellow-800 my-4" />

        {/* User Section */}
        <div className="py-4">
          <Link to="/" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150 font-bold">
            <FaHome className="mr-3" />
            <span>HOME</span>
          </Link>

          <Link to="/ourmenu" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaList className="mr-3" />
            <span>MENU</span>
          </Link>

          <Link to="/ourshop/special" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaShoppingBag className="mr-3" />
            <span>SHOP</span>
          </Link>

          <Link to="/contact" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaEnvelope className="mr-3" />
            <span>CONTACT</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardDrawer;
