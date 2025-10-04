import { useRef, useState } from "react";
import SecTionTitle from "../../Components/SecTionTitle";
import ChefRecomendedCard from "./ChefRecomendedCard";
import useMenu from "../../hooks/useMenu";

//swiper import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ChefRecomended = () => {
  const [menu] = useMenu();

  const itemsPerPage = 8;
  const slideMenu = [];

  for (let i = 0; i < menu.length; i += itemsPerPage) {
    slideMenu.push(menu.slice(i, i + itemsPerPage));
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <SecTionTitle subHeading="Should Try" heading="Chef Recommendes" />

      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideMenu.map((items, index) => (
          <SwiperSlide key={index}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {items.map((ChefReciepe) => (
                <ChefRecomendedCard
                  key={ChefReciepe?._id}
                  ChefCard={ChefReciepe}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefRecomended;
