 // import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import ChefRecomendedCard from "../HomeComponents/ChefRecomendedCard";

//swiper import
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

  // যদি কোনো আইটেম না থাকে
  if (filteredItem.length === 0) {
    return (
      <p className="text-center text-gray-500 text-lg font-bold">
        এই ক্যাটাগরিতে কোনো আইটেম নেই
      </p>
    );
  }

  // pagination এর জন্য স্লাইড তৈরি
  const itemsPerPage = 6;
  const slideMenu = [];
  for (let i = 0; i < filteredItem.length; i += itemsPerPage) {
    slideMenu.push(filteredItem.slice(i, i + itemsPerPage));
  }

  // Pagination configuration
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideMenu.map((slideItems, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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