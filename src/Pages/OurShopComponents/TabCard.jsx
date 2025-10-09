// ✅ নতুন যোগ করা — CSS ফাইল ইমপোর্ট করেছি pagination ডিজাইন আলাদা রাখার জন্য
import "./TabCard.css"; // added to handle custom pagination styling

import useMenu from "../../hooks/useMenu";
import ChefRecomendedCard from "../HomeComponents/ChefRecomendedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const TabCard = ({ categoryFilter }) => {
  const [menu, loading] = useMenu();
  const filteredItem = menu.filter((item) => item.category === categoryFilter);

  if (loading) {
    return (
      <p className="text-center text-orange-500 text-lg font-bold">
        ডেটা লোড হচ্ছে...
      </p>
    );
  }

  if (filteredItem.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg font-bold">
        এই ক্যাটাগরিতে কোনো আইটেম নেই
      </p>
    );
  }

  // pagination data split
  const itemsPerPage = 6;
  const slideMenu = [];
  for (let i = 0; i < filteredItem.length; i += itemsPerPage) {
    slideMenu.push(filteredItem.slice(i, i + itemsPerPage));
  }

  // ✅ Custom pagination setup
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // নিচের ব্লকটা মুছে দাও — (Tailwind class string Swiper DOM এ সাপোর্ট করে না)
      /*
      return `
        <span class="${className} 
          flex items-center justify-center 
          p-4 content-center
          bg-blue-500 text-white font-bold text-xl  
          rounded-full shadow-md cursor-pointer 
          transition-all duration-300 
          hover:bg-blue-200 hover:scale-105">
          ${index + 1}
        </span>
      `;
      */

      // ✅ নতুন কোড — custom class যোগ করা হয়েছে, ডিজাইন এখন TabCard.css থেকে আসবে
      return `
        <span class="${className} custom-bullet"> 
          ${index + 1}
        </span>
      `;
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper pb-16" // ✅ নিচে জায়গা বাড়ানো হয়েছে যাতে pagination নিচে ঠিকভাবে দেখা যায়
      >
        {slideMenu.map((slideItems, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {slideItems.map((chefReciepe) => (
                <ChefRecomendedCard
                  key={chefReciepe?._id}
                  ChefCard={chefReciepe}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabCard;
