import { Link, NavLink } from "react-router-dom";
import hookUseCart from "../../hooks/hookUseCart";
import UseAuthHook from "../../providers/ContexHook/UseAuthHook";
import { IoMenu } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { useEffect, useState } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const NavbarContent = () => {
  const { user, logOut } = UseAuthHook();
  const { displayName, photoURL } = user || {};
  const [cart] = hookUseCart();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-orange-600 border-b-2 border-orange-600 uppercase"
      : "text-white uppercase hover:text-orange-500 transition";

  return (
    <div
      className={`w-full flex items-center transition-all duration-300 ${
        scrolled ? "shadow-xl backdrop-blur-md" : ""
      }`}>
      {/* 🔹 Mobile Left */}
      {/* <div className="lg:hidden">
        <label
          htmlFor="my-drawer-4"
          className="btn btn-square btn-ghost text-orange-500 border-r-2 border-orange-600 hover:bg-[#ff68035b]">
          <IoMenu size={25} />
        </label>
      </div> */}

      {/* 🔹 Desktop Menu */}
      <ul className="hidden lg:flex w-full items-center text-white">
        { user && (<label
          htmlFor="my-drawer-4"
          className="btn btn-square btn-ghost text-orange-500 border-r-2 border-orange-600 hover:bg-[#ff68035b]">
          <IoMenu size={18} />
        </label>)}

        <li className="flex-1 text-center">
          <NavLink to="/" className="btn btn-ghost text-xl text-white">
            Gen-Z
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/contact" className={navLinkClass}>
            Contact us
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/ourmenu" className={navLinkClass}>
            Our Menu
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/ourshop/salad" className={navLinkClass}>
            Our Shop
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/login" className={navLinkClass}>
            Log In
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <NavLink to="/signup" className={navLinkClass}>
            Sign Up
          </NavLink>
        </li>

        <li className="flex-1 text-center">
          <Link to="/profile" className="border-2 border-white rounded-xl px-2">
            {displayName || "No User"}
          </Link>
        </li>
        {/*  */}
        <li className="flex-1 flex justify-center">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <img
                className="mask mask-circle w-10 h-10 cursor-pointer border-2 border-white"
                src={photoURL || "/default.png"}
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white text-black rounded-box z-50 w-52 p-2 shadow">
              <li className="font-semibold text-center border-b pb-1">
                {displayName || "No User"}
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/dashboardDrawer/userhome">Dashboard</Link>
              </li>

              <li>
                <button
                  onClick={logOut}
                  className="text-red-500 font-semibold w-full text-left">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </li>
        {/*  */}
        <li className="flex-1 flex justify-center">
          <NavLink
            to="/dashboardDrawer/cart"
            className="bg-white rounded-lg flex items-center px-2">
            <TiShoppingCart className="text-orange-600 text-2xl mr-1" />
            <div className="badge badge-sm bg-orange-600">+{cart?.length}</div>
          </NavLink>
        </li>

        <li className="flex-1 flex justify-center">
          {user ? (
            <button
              onClick={logOut}
              className="btn border border-red-700 bg-red-400 text-white hover:bg-red-600">
              Log Out
            </button>
          ) : (
            <NavLink
              to="/login"
              className="btn border border-green-700 bg-green-400 text-white hover:bg-green-600">
              Log In
            </NavLink>
          )}
        </li>
      </ul>
    </div>
  );
};
export default NavbarContent;
