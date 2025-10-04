import { useRef, useState } from "react";
import SecTionTitle from "../../Components/SecTionTitle";
import ChefRecomendedCard from "./ChefRecomendedCard";
import useMenu from "../../hooks/useMenu";

//swiper import
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const ChefRecomended = () => {
  const [menu] = useMenu();

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div>
      <SecTionTitle subHeading="Should Try" heading="Chef Recommendes" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {menu.map((ChefReciepe) => (
          <ChefRecomendedCard key={ChefReciepe?._id} ChefCard={ChefReciepe} />
        ))}
      </div>
    </div>
  );
};

export default ChefRecomended;
