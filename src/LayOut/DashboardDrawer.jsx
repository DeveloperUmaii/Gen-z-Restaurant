import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { FaHome, FaHistory, FaShoppingCart, FaStar, FaEnvelope,FaBars,FaTimes,FaList, } from 'react-icons/fa';
import { IoCalendar, IoMenu } from 'react-icons/io5';
import { FaShoppingBag } from 'react-icons/fa';
import LayOut from "./LayOut";



const DashboardDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <LayOut></LayOut>
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
            <FaHome  className="mr-3 ml-4" />
            <span>USER HOME</span>
          </Link>

          <Link to="/additems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <IoCalendar  className="mr-3 ml-4" />
            <span>RESERVATION</span>
          </Link>

          <Link to="/manageitems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaHistory  className="mr-3 ml-4" />
            <span>PAYMENT HISTORY</span>
          </Link>

          <Link to="/dashboardDrawer/cart" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaShoppingCart  className="mr-3 ml-4" />
            <span>MY CART</span>
          </Link>


          <Link to="/users" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <FaStar  className="mr-3 ml-4" />
            <span>ADD REVIEW</span>
          </Link>
          
          <Link to="/users" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
            <IoMenu  className="mr-3 ml-4" />
            <span>MY BOOKING</span>
          </Link>
        </div>

        <hr className="border-yellow-800 my-4" />

        {/* User Section <FaShoppingBag  className="mr-3" /><FaEnvelope  className="mr-3" />*/}
        <div className="py-4">
          <Link to="/" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150 font-bold">
            <FaHome className="mr-3 " />
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
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardDrawer;
