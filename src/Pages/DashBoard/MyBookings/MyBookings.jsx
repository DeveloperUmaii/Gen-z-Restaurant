import React from 'react';
import { FaTrashAlt, FaCheck } from 'react-icons/fa';

const MyBookings = () => {
    // উদাহরণস্বরূপ ডাটা
    const bookings = [
        {
            id: 1,
            email: "user@mail.com",
            phone: "+38 (012) 34 56 789",
            date: "25/10/24",
            time: "08:00 PM",
            guest: "4 Persons",
            status: "Confirmed"
        },
        // আরো ডাটা এখানে যোগ করা যাবে
    ];

    const handleDelete = (id) => {
        console.log("Delete booking ID:", id);
    };

    const handleConfirm = (id) => {
        console.log("Confirming booking ID:", id);
    };

    return (
        <div className="w-full px-4 md:px-10 py-10 bg-white min-h-screen">
            {/* Header Section */}
            <div className="text-center mb-12">
                <p className="text-yellow-600 italic mb-2">---At a Glance!---</p>
                <h2 className="text-4xl uppercase border-y-4 py-3 inline-block px-10 font-medium">
                    Manage All Bookings
                </h2>
            </div>

            {/* Table Container */}
            <div className="max-w-7xl mx-auto bg-white p-6 md:p-12 shadow-sm border border-gray-100 rounded-sm">
                <h2 className="text-3xl font-bold uppercase mb-8 font-serif">
                    Total Bookings: {bookings.length}
                </h2>

                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-y-0">
                        {/* Table Head */}
                        <thead className="bg-[#D1A054] text-white">
                            <tr>
                                <th className="py-5 rounded-tl-xl">#</th>
                                <th className="uppercase text-sm">Email</th>
                                <th className="uppercase text-sm">Date</th>
                                <th className="uppercase text-sm">Time</th>
                                <th className="uppercase text-sm">Guest</th>
                                <th className="uppercase text-sm">Status</th>
                                <th className="py-5 rounded-tr-xl uppercase text-sm">Action</th>
                            </tr>
                        </thead>
                        
                        {/* Table Body */}
                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr key={booking.id} className="border-b">
                                    <th className="py-6 font-medium text-gray-700">{index + 1}</th>
                                    <td className="text-gray-500">{booking.email}</td>
                                    <td className="text-gray-500">{booking.date}</td>
                                    <td className="text-gray-500">{booking.time}</td>
                                    <td className="text-gray-500">{booking.guest}</td>
                                    <td>
                                        <span className={`font-medium ${booking.status === 'Confirmed' ? 'text-green-600' : 'text-yellow-600'}`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            {/* Confirm Button */}
                                            <button 
                                                onClick={() => handleConfirm(booking.id)}
                                                className="btn btn-ghost bg-[#28A745] hover:bg-green-700 text-white btn-md rounded-full"
                                            >
                                                <FaCheck />
                                            </button>
                                            {/* Delete Button */}
                                            <button 
                                                onClick={() => handleDelete(booking.id)}
                                                className="btn btn-ghost bg-[#B91C1C] hover:bg-red-800 text-white btn-md rounded-lg"
                                            >
                                                <FaTrashAlt />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBookings;