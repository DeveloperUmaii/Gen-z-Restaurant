import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Toggle icon (hamburger & close)
import { IoIosHome } from "react-icons/io";
import { ImSpoonKnife } from "react-icons/im";
import { PiListBulletsBold } from "react-icons/pi";
import { RiHealthBookFill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { IoHomeSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";
import { GiShoppingBag } from "react-icons/gi";
import { IoIosMailUnread } from "react-icons/io";



const DashboardDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* 🔹 Drawer Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 bg-yellow-900 text-white p-2 rounded-md shadow-md hover:bg-yellow-800 transition duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 🔹 Drawer Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-yellow-900 text-white shadow-xl transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-yellow-800">
          <h1 className="text-xl font-bold tracking-wider">Gen-Z</h1>
          <p className="text-xs font-semibold text-yellow-300">RESTAURANT</p>
        </div>

        <div className="py-4">
          <h2 className="px-4 mb-2 text-xs font-semibold uppercase text-yellow-300">
            Admin Home
          </h2>



{/* ************************** */}
          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><IoIosHome className="h-5 w-5  mx-4" /><h1>ADMIN HOME</h1></div>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><ImSpoonKnife className="h-5 w-5  mx-4" /><h1>ADD ITEMS</h1></div>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><PiListBulletsBold className="h-5 w-5  mx-4" /><h1>MANAGE ITEMS</h1></div>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"> <RiHealthBookFill className="h-5 w-5  mx-4" /><h1>MANAGE BOOKINGS</h1></div>
          </a>

          <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><GrGroup className="h-5 w-5  mx-4" /><h1>ALL USERS</h1></div>
          </a>



          {/* ************** */}

        </div>

        <hr className="border-yellow-800 my-4" />

        <div className="py-4">
                    <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><IoHomeSharp className="h-6 w-6  ml-1 mr-3" /><h1 className="font-bold">HOME</h1></div>
          </a>
          
                    <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><ImMenu className="h-6 w-6  ml-1 mr-3" /><h1 className="font-bold">MENU</h1></div>
          </a>
                    <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><GiShoppingBag className="h-6 w-6  ml-1 mr-3" /><h1 className="font-bold">SHOP</h1></div>
          </a>
                    <a
            href="#"
            className="flex items-center px-4 py-2 hover:bg-yellow-800 transition duration-150"
          >
              <div className="flex"><IoIosMailUnread className="h-6 w-6  ml-1 mr-3" /><h1 className="font-bold">CONTACT</h1></div>
          </a>

          {/* ************* */}

        </div>
      </div>
    </div>
  );
};

export default DashboardDrawer;
