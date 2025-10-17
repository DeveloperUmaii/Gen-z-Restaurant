import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../PrimaryComponents/Navbar";
import Footer from "../PrimaryComponents/Footer";

const LayOut = () => {
    const location = useLocation();
    console.log(location);
    const noFootNav = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
                        {/* { noFootNav || <Navbar />} */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
                        {/* { noFootNav || <Footer />} */}
        </div>
    );
};

export default LayOut;