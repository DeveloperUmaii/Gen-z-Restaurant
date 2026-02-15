import React from 'react';
import { FaWallet, FaStore, FaPhoneAlt, FaShoppingCart, FaStar, FaCalendarAlt } from 'react-icons/fa';

const UserHome = () => {
    // উদাহরণস্বরূপ ইউজার ডাটা (আপনি useContext বা Auth থেকে পাবেন)
    const user = {
        displayName: "Awlad Hossain",
        photoURL: "" // এখানে প্রোফাইল ইমেজের লিঙ্ক হবে
    };

    // স্ট্যাটাস কার্ডের ডাটা
    const stats = [
        { label: 'Menu', value: '205', icon: <FaWallet />, bg: 'from-[#BB34F5] to-[#FCDBFF]' },
        { label: 'Shop', value: '103', icon: <FaStore />, bg: 'from-[#D3A256] to-[#FDE8C0]' },
        { label: 'Contact', value: '03', icon: <FaPhoneAlt />, bg: 'from-[#FE4880] to-[#FECDE9]' },
    ];

    return (
        <div className="w-full px-6 py-10 bg-white min-h-screen">
            <h2 className="text-3xl font-serif font-bold mb-8 uppercase">Hi, Welcome Back!</h2>

            {/* Top Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className={`flex items-center justify-center gap-6 py-10 rounded-lg text-white bg-gradient-to-r ${stat.bg} shadow-md`}>
                        <div className="text-5xl">{stat.icon}</div>
                        <div>
                            <div className="text-4xl font-bold">{stat.value}</div>
                            <div className="text-2xl font-medium">{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* User Profile and Activities Section */}
            <div className="flex flex-col md:flex-row min-h-[400px]">
                {/* Profile Side */}
                <div className="w-full md:w-1/2 bg-[#FFEDD5] flex flex-col items-center justify-center border-r-4 border-[#D1A054] py-10">
                    <div className="w-48 h-48 rounded-full border-4 border-[#D1A054] overflow-hidden bg-white mb-6">
                        {user.photoURL ? (
                            <img src={user.photoURL} alt="profile" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                <span className="text-6xl text-gray-400 font-bold">👤</span>
                            </div>
                        )}
                    </div>
                    <h3 className="text-3xl font-serif font-bold uppercase">{user.displayName || "User Name"}</h3>
                </div>

                {/* Activities Side */}
                <div className="w-full md:w-1/2 bg-[#FEF9C3] flex flex-col items-center justify-center py-10">
                    <div className="text-left">
                        <h3 className="text-3xl font-serif font-bold uppercase mb-8">Your Activities</h3>
                        <div className="space-y-4 text-xl font-bold uppercase">
                            <p className="flex items-center gap-3 text-blue-500">
                                <FaShoppingCart /> Orders: 6
                            </p>
                            <p className="flex items-center gap-3 text-teal-500">
                                <FaStar /> Reviews: 2
                            </p>
                            <p className="flex items-center gap-3 text-yellow-600">
                                <FaCalendarAlt /> Bookings: 1
                            </p>
                            <p className="flex items-center gap-3 text-orange-500">
                                <FaWallet /> Payment: 3
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserHome;