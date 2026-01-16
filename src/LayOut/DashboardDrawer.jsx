import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { FaHome, FaShoppingCart, FaStar, FaEnvelope,FaBars,FaTimes,FaList,FaShoppingBag,FaUtensils, FaListAlt, FaBook, FaUsers } from 'react-icons/fa';
import { IoCalendar, IoMenu } from 'react-icons/io5';
import { GiWallet } from 'react-icons/gi';
import { LuCalendarMinus } from 'react-icons/lu';
import LayOut from "./LayOut";
import hookUseCart from "../hooks/hookUseCart";
import {   } from "react-icons/fa";
import hookAdmin from "../hooks/hookAdmin";



const DashboardDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  const [cart] = hookUseCart();

  // TODO: get admin data from the data base
  // const isAdmin = true;
  const isAdmin = hookAdmin(); //(no.3) 

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

                        {/* Drawe Section */}
        <div className="py-4">
          {
            isAdmin ?   
                      // Admin Section
                      <>       
                        <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
                          Admin Panel
                        </h2>

                        <Link to="/dashboardDrawer/adminhome" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaHome  className="mr-3 ml-4" />
                          <span>#ADMIN HOME</span>
                        </Link>

                        <Link to="/dashboardDrawer/additems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaUtensils  className="mr-3 ml-4" />
                          <span>#ADD ITEMS</span>
                        </Link>

                        <Link to="/dashboardDrawer/manageitems" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaListAlt  className="mr-3 ml-4" />
                          <span>#MANAGE ITEMS</span>
                        </Link>

                        <Link to="/dashboardDrawer/managebooking" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaBook  className="mr-3 ml-4" />
                          <span>#MANAGE BOOKING ({cart?.length})</span>
                        </Link>


                        <Link to="/dashboardDrawer/allusers" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaUsers  className="mr-3 ml-4" />
                          <span>#ALL USERS</span>
                        </Link>

                      </> 
                 : 
                      // User section
                      <>          
                        <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
                          User Panel
                        </h2>

                        <Link to="/dashboardDrawer/userhome" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaHome  className="mr-3 ml-4" />
                          <span>USER HOME</span>
                        </Link>

                        <Link to="/dashboardDrawer/reservation" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <IoCalendar  className="mr-3 ml-4" />
                          <span>RESERVATION</span>
                        </Link>

                        <Link to="/dashboardDrawer/paymenthistory" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <GiWallet  className="mr-3 ml-4" />
                          <span>PAYMENT HISTORY</span>
                        </Link>

                        <Link to="/dashboardDrawer/cart" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaShoppingCart  className="mr-3 ml-4" />
                          <span>MY CART ({cart?.length})</span>
                        </Link>


                        <Link to="/dashboardDrawer/addreview" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <FaStar  className="mr-3 ml-4" />
                          <span>ADD REVIEW</span>
                        </Link>
                        
                        <Link to="/dashboardDrawer/mybooking" className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                          <LuCalendarMinus  className="mr-3 ml-4" />
                          <span>MY BOOKING</span>
                        </Link>
                      </>
          }

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
        {/* <Outlet></Outlet> */}
      </div>
    </div>
  );
};

export default DashboardDrawer;
