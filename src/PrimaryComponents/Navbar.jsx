import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../providers/Authprovider";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";
import Swal from "sweetalert2";
import { TiShoppingCart } from "react-icons/ti";
import hookUseCart from "../hooks/hookUseCart";

const Navbar = () => {
  const { user, logOut } = UseAuthHook();
  const { displayName, photoURL } = user || {};
  const [dataFromBackEnd] = hookUseCart();

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
      <li>
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
      <li>
        {/* <NavLink to="/contact" className="text-[#fff] uppercase"> */}
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
      <li>
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
      <li>
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
      <li>
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
      <li>
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
      <li>
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
    </>
  );
  // console.log('25noLine',user);
  return (
    <div className="navbar  border-2 border-[#00000036] h-10 bg-[#00000028] fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="bg-[#00000028]  menu menu-sm dropdown-content  rounded-b-2xl z-50 mt-3 w-52 p-2 ">
            {navoption}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl text-[#fff]" to="/">
          Gen-Z
        </Link>
        <Link
          to="dashboardDrawer"
          className="btn btn-ghost text-xl text-[#fff]">
          DRAWER
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu menu-horizontal px-1 ">{navoption}</ul>
      </div>

      <div className="  w-full flex justify-center items-center">
        <Link to="/profile" className="border-2 border-white rounded-xl">
          <h1 className="text-red-600 px-6">{displayName || "no Nane"}</h1>
        </Link>
        <Link
          to="/profile"
          className="w-20  h-20 flex justify-center items-center">
          <img className="mask mask-circle" src={photoURL} />
        </Link>
      </div>

      {/* cart */}
      <div className="">
        {/* <button onClick={()=>{handleAddCart(item)}} className="bg-[#ffff] px-2 rounded-lg flex justify-center items-center"> */}
        <button className="bg-[#ffff] px-2 rounded-lg flex justify-center items-center">
          <TiShoppingCart className="text-orange-600 text-3xl mr-1" />
          <div className="badge badge-sm bg-orange-600 badge-secondary">
            +{dataFromBackEnd?.length}
          </div>
        </button>
      </div>

      <div className="navbar-end">
        {user ? (
          <Link
            to="/"
            className="btn border border-red-700 bg-red-400 text-white hover:bg-red-600  "
            onClick={signOut}>
            Log Out
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn border border-green-700 bg-green-400 text-white hover:bg-green-600">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
