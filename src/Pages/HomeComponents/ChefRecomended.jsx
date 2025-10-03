import { useRef, useState } from "react";
import SecTionTitle from "../../Components/SecTionTitle";
import ChefRecomendedCard from "./ChefRecomendedCard";
import useMenu from "../../hooks/useMenu";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ChefRecomended = () => {
  const [menu] = useMenu();

  // প্রতি স্লাইডে ৪টি আইটেম
  const chunkSize = 4;
  const chunks = [];
  for (let i = 0; i < menu.length; i += chunkSize) {
    chunks.push(menu.slice(i, i + chunkSize));
  }

  return (
    <div>
      <SecTionTitle subHeading="Should Try" heading="Chef Recommendes" />

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-Balck mx-1">${index + 1}</span>`;
          },
        }}
        className="mySwiper"
      >
        {chunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              {chunk.map((ChefReciepe) => (
                <ChefRecomendedCard
                  key={ChefReciepe?._id}
                  ChefCard={ChefReciepe}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="flex justify-between mt-4">
          <button className="prev-btn btn btn-outline btn-primary">
            Prev
          </button>
          <button className="next-btn btn btn-outline btn-primary">
            Next
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default ChefRecomended;

