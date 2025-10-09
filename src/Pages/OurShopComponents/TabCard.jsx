import "./TabCard.css";
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
        Data Loading...
      </p>
    );
  }

  if (filteredItem.length === 0) {
    return (<p className="text-center text-gray-500 text-base font-bold">There's Have No Data!</p>);
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
        className="mySwiper pb-16" 
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
