import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../providers/Authprovider";
import UseAuthHook from "../providers/ContexHook/UseAuthHook";

const Navbar = () => {
    const {user, logOut} = UseAuthHook();
    // const {user} = useContext(AuthContext);
    const navoption = <>
        <li><Link to="/" className="text-[#fff] uppercase">Home</Link></li>
        <li><Link to="/contact" className="text-[#fff] uppercase">Contact us</Link></li>
        <li><Link to="/dashbord" className="text-[#fff] uppercase">Dashboard</Link></li>
        <li><Link to="/ourmenu" className="text-[#fff] uppercase">Our Menu</Link></li>
        <li><Link to="/ourshop/salad" className="text-[#fff] uppercase">Our Shop</Link></li>
        <li><Link to="/login" className="text-[#fff] uppercase">Log In</Link></li>
        <li><Link to="/signup" className="text-[#fff] uppercase">Sign Up</Link></li>
        {/* <li tabIndex={0}>
            <details>
                <summary  className="text-[#fff]">Parent</summary>
                <ul className="p-2 bg-[#07acc944]">
                    <li><Link to="/submenu1" className="text-[#fff]">Submenu 1</Link></li>
                    <li><Link to="/submenu2" className="text-[#fff]">Submenu 2</Link></li>
                </ul>
            </details>
        </li> */}
    </>;
    // console.log('25noLine',user);
    return (
        <div className="navbar  bg-[#00000028] fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </div>
                    <ul tabIndex={0}
                        className="bg-[#00000028]  menu menu-sm dropdown-content  rounded-b-2xl z-50 mt-3 w-52 p-2 ">
                        {navoption}
                    </ul>
                </div>
                <Link className="btn btn-ghost text-xl text-[#fff]" to="/"  >Gen-Z</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" menu menu-horizontal px-1 ">
                    {navoption}
                </ul>
            </div>

            <div className="  w-full flex justify-center">
                <div className="border-2 border-white rounded-xl">
                    <h1 className="text-white px-6">{user?.email||'no User'}</h1>
                </div>
            </div>

            <div className="navbar-end">

                {
                    user?<Link to="/" className="btn border border-red-700 bg-red-400 text-white hover:bg-red-600  "onClick={logOut} >Log Out</Link> 
                    :
                    <Link to="/login" className="btn border border-green-700 bg-green-400 text-white hover:bg-green-600">Log In</Link> 
                }
                
            </div>
        </div>
    );
};

export default Navbar;
