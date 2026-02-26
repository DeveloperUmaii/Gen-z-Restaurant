import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../PrimaryComponents/Navbar";
import Footer from "../PrimaryComponents/Footer";
import DashBoard from "../Pages/DashBoard";

const LayOut = ({ toggleDrawer, isOpen }) => {
  const location = useLocation();

  // অনেক সময় লগইন বা সাইনআপ পেজে আমরা নেভবার/ফুটার চাই না, তাই এই চেকটি রাখা ভালো
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup") || location.pathname.includes("dashbord");

  return (
    <div>
      {/* Navbar-এ toggleDrawer এবং isOpen প্রপস হিসেবে পাঠানো হলো */}
      {noHeaderFooter || <Navbar />}
      {/* <DashBoard /> */}
      {/* মেইন কন্টেন্ট রেন্ডার করার জন্য Outlet */}
      {/* <div className="min-h-screen ">
        <Outlet />
      </div> */}
        {/* <Footer /> */}
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default LayOut;
