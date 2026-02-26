import Navbar from "../PrimaryComponents/Navbar";
import Home from "./Home";
import { Link, NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../providers/Authprovider";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import hookUseCart from "../hooks/hookUseCart";
import DashboardDrawer from "../LayOut/DashboardDrawer";
import React, { useState } from "react";

import {
  FaHome,
  FaShoppingCart,
  FaStar,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaList,
  FaShoppingBag,
  FaUtensils,
  FaListAlt,
  FaBook,
  FaUsers,
} from "react-icons/fa";
import { IoCalendar, IoMenu } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { LuCalendarMinus } from "react-icons/lu";
// import LayOut from "./LayOut";
import {} from "react-icons/fa";
import hookAdmin from "../hooks/hookAdmin";

const DashBoard = () => {
  const { user, logOut } = UseAuthHook();
  const { displayName, photoURL } = user || {};
  const [dataFromBackEnd] = hookUseCart();
  const [cart] = hookUseCart(); // TODO: get admin data from the data base
  // const isAdmin = true;

  const [isAdmin] = hookAdmin();
  const signOut = () => {
    logOut();
    Swal.fire({
      position: "top-end",
      icon: "success", // success আইকন থাকবে
      title: "You have been logged out successfully.",
      showConfirmButton: false,
      timer: 1500,
      iconColor: "#ef4444", // 🔴 Tailwind 'text-red-500' রঙ (#ef4444)
      customClass: {
        popup: "rounded-xl shadow-lg p-4", // Tailwind-style look
        title: "text-red-600 font-semibold", // টাইটেলও লাল রঙে
      },
    });
  };

  const navoption = (
    <>
      <li className=" flex justify-center   ">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
            className="my-1.5 inline-block size-4">
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
            <path d="M9 4v16"></path>
            <path d="M14 10l2 2l-2 2"></path>
          </svg>
        </label>
      </li>
      <li className=" flex justify-center  ">
        <NavLink to="/" className="btn btn-ghost text-xl text-[#fff]">
          Gen-Z
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="dashboardDrawer/adminhome"
          className="btn btn-ghost text-xl text-[#fff]">
          DRAWER
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Home
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Contact us
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/dashbord"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Dashboard
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/ourmenu"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Our Menu
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/ourshop/salad"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Our Shop
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Log In
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 border-b-2 border-orange-600 uppercase"
              : "text-[#fff] uppercase"
          }>
          Sign Up
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        <Link to="/profile" className="border-2 border-white rounded-xl">
          <h1 className="text-red-600 px-1">{displayName || "No User"}</h1>
        </Link>
      </li>
      <li className=" flex justify-center item-center ">
        <Link
          to="/profile"
          className="w-20 h-20  flex justify-center items-center ">
          <img className="mask mask-circle" src={photoURL} />
        </Link>
      </li>
      <li className=" flex justify-center mr-5 ">
        <NavLink
          to="/dashboardDrawer/cart"
          className="bg-[#ffff] rounded-lg flex justify-center items-center">
          <TiShoppingCart className="text-orange-600 text-3xl mr-1" />
          <div className="badge badge-sm bg-orange-600 badge-secondary">
            +{dataFromBackEnd?.length}
          </div>
        </NavLink>
      </li>
      <li className=" flex justify-center  ">
        {user ? (
          <Link
            to="/"
            className="btn border border-red-700 bg-red-400 text-white hover:bg-red-600 "
            onClick={signOut}>
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn border border-green-700 bg-green-40d0 text-white hover:bg-green-600">
            Log In
          </Link>
        )}
      </li>
    </>
  );

  return (
    <div className="drawer">
      <input id="my-drawer-4" type="checkbox" className=" drawer-toggle" />

      <div className="drawer-content  ">
        <div className=" is-drawer-close:w-auto is-drawer-open:w-4/12 flex ">
          <div className=" w-full navbar border-2 border-[#00000036] h-8 bg-[#00000028] fixed z-10">
            <div className="lg:hidden">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4">
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="bg-[#00000028] menu menu-sm dropdown-content rounded-b-2xl z-50 mt-3 w-52 p-2 ">
                  {navoption}
                </ul>
              </div>
              {/* Sidebar toggle icon */}

              {/* <div className=""><DashboardDrawer /> </div> */}
            </div>

            {/* ..........nav */}

            <div className="navbar-center hidden lg:flex items-center  ">
              <ul className="    menu menu-horizontal  is-drawer-close:gap-x-1.5 ">
                {navoption}
              </ul>
            </div>

            {/* ........ */}
          </div>
        </div>
        {/* Page content here */}
        <div className="">
          <Home />
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-yellow-900 text-white shadow-xl is-drawer-close:w-0 md:is-drawer-open:w-3/12 lg:is-drawer-open:w-2/12">
          {/* Sidebar content here */}

          <div className="menu w-full grow p-4 border-b border-yellow-800">
            <h1 className="text-xl font-bold tracking-wider">Gen-Z</h1>
            <p className="text-xs font-semibold text-yellow-300">RESTAURANT</p>
          </div>

          <hr className="border-yellow-600 w-full" />
          <div className="menu w-full grow py-4">
            {isAdmin ? (
              // Admin Section
              <>
                <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
                  Admin Panel
                </h2>
                <Link
                  to="/dashboardDrawer/adminhome"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaHome className="mr-3 ml-4" /> <span>ADMIN HOME</span>
                </Link>
                <Link
                  to="/dashboardDrawer/additem"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaUtensils className="mr-3 ml-4" /> <span>ADD ITEMS</span>
                </Link>
                <Link
                  to="/dashboardDrawer/manageitems"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaListAlt className="mr-3 ml-4" />
                  <span>MANAGE ITEMS</span>
                </Link>
                <Link
                  to="/dashboardDrawer/managebookings"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaBook className="mr-3 ml-4" />
                  <span>MANAGE BOOKING ({cart?.length})</span>
                </Link>
                <Link
                  to="/dashboardDrawer/allusers"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaUsers className="mr-3 ml-4" /> <span>ALL USERS</span>
                </Link>
              </>
            ) : (
              // User section
              <>
                <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
                  User Panel
                </h2>
                <Link
                  to="/dashboardDrawer/userhome"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaHome className="mr-3 ml-4" /> <span>USER HOME</span>
                </Link>
                <Link
                  to="/dashboardDrawer/reservation"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <IoCalendar className="mr-3 ml-4" />
                  <span>RESERVATION</span>
                </Link>
                <Link
                  to="/dashboardDrawer/paymenthistory"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <GiWallet className="mr-3 ml-4" />{" "}
                  <span>PAYMENT HISTORY</span>
                </Link>
                <Link
                  to="/dashboardDrawer/cart"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaShoppingCart className="mr-3 ml-4" />{" "}
                  <span>MY CART ({cart?.length})</span>
                </Link>
                <Link
                  to="/dashboardDrawer/addreview"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <FaStar className="mr-3 ml-4" /> <span>ADD REVIEW</span>
                </Link>
                <Link
                  to="/dashboardDrawer/mybooking"
                  className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
                  <LuCalendarMinus className="mr-3 ml-4" />
                  <span>MY BOOKING</span>
                </Link>
              </>
            )}
          </div>
          <hr className="border-yellow-600 w-full" />

          <div className="menu w-full grow py-4">
            <Link
              to="/"
              className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150 font-bold">
              <FaHome className="mr-3 " />
              <span>HOME</span>
            </Link>

            <Link
              to="/ourmenu"
              className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
              <FaList className="mr-3" />
              <span>MENU</span>
            </Link>

            <Link
              to="/ourshop/special"
              className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
              <FaShoppingBag className="mr-3" />
              <span>SHOP</span>
            </Link>

            <Link
              to="/contact"
              className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150">
              <FaEnvelope className="mr-3" />
              <span>CONTACT</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
