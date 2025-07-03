import { Outlet } from "react-router-dom";
import Navbar from "../PrimaryComponents/Navbar";
import Footer from "../PrimaryComponents/Footer";

const LayOut = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayOut;