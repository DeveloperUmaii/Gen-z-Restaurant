git add .
git commit -m"Dn"
git push


// eita hocche 1st copy with pagination
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
console.log('21 er niche pagination')
  // pagination
  const itemsPerPage = 6;
  const slideMenu = [];
  for (let i = 0; i < filteredItem.length; i += itemsPerPage) {
    slideMenu.push(filteredItem.slice(i, i + itemsPerPage));
  }
console.log('filterd item gulo',filteredItem)
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
 <Swiper
  key={categoryFilter}   // 👈 বাধ্য করে পুনরায় রেন্ডার
  pagination={pagination}
  modules={[Pagination]}
  autoHeight={true}
  observer={true}
  observeParents={true}
>
  {slideMenu.map((items, index) => (
    <SwiperSlide key={index}>
      <div className="grid grid-cols-3 gap-x-2 gap-y-1">
        {items.map((chefReciepe) => (
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


// 2nd copy withOut Pagination
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
 
  return (
    <div>

      <div className="grid grid-cols-3 gap-x-2 gap-y-1">
        {filteredItem.map((chefReciepe) => (
          <ChefRecomendedCard
            key={chefReciepe?._id}
            ChefCard={chefReciepe}
          />
        ))}
      </div>



    </div>
  );
};

export default TabCard;


<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"

<span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">1</span>

