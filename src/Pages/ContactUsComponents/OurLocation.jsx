import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import SecTionTitle from '../../Components/SecTionTitle';

const OurLocation = () => {
    const locationInfo = [
        {
            id: 1,
            title: "PHONE",
            content: "+38 (012) 34 56 789",
            icon: <FaPhoneAlt className="text-white text-2xl" />
        },
        {
            id: 2,
            title: "ADDRESS",
            content: "+38 (012) 34 56 789", // আপনার স্ক্রিনশটে নম্বর দেওয়া, তাই এখানেও তাই রাখা হলো
            icon: <FaMapMarkerAlt className="text-white text-2xl" />
        },
        {
            id: 3,
            title: "WORKING HOURS",
            content: "Mon - Fri: 08:00 - 22:00 \n Sat - Sun: 10:00 - 23:00",
            icon: <FaClock className="text-white text-2xl" />
        }
    ];

    return (
        <div className="w-full px-4 md:px-10 py-20 bg-white">
            {/* Header Section */}
            <div className="text-center mb-12">
                <SecTionTitle subHeading='Visit Us' heading='Our Location'/>
            </div>

            {/* Cards Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                {locationInfo.map((item) => (
                    <div key={item.id} className="border border-gray-200">
                        {/* Golden Header with Icon */}
                        <div className="bg-[#D1A054] py-4 flex justify-center items-center">
                            {item.icon}
                        </div>
                        
                        {/* Content Area */}
                        <div className="bg-[#F3F3F3] mx-6 mb-6 p-8 text-center min-h-[180px] flex flex-col justify-center">
                            <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                            <p className="text-gray-700 whitespace-pre-line">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurLocation;