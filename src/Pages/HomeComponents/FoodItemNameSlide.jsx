import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import foodItemBannerSliderImg1 from '../../assets/home/slide1.jpg';
import foodItemBannerSliderImg2 from '../../assets/home/slide2.jpg';
import foodItemBannerSliderImg3 from '../../assets/home/slide3.jpg';
import foodItemBannerSliderImg4 from '../../assets/home/slide4.jpg';
import foodItemBannerSliderImg5 from '../../assets/home/slide5.jpg';
import SecTionTitle from '../../Components/SecTionTitle';

const FoodItemNameSlide = () => {
  return (
    <>
      <SecTionTitle subHeading={'date/time'} heading={'Subject'} />
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          className="mySwiper"
        >
          {[foodItemBannerSliderImg1, foodItemBannerSliderImg2, foodItemBannerSliderImg3, foodItemBannerSliderImg4, foodItemBannerSliderImg5].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full max-w-sm mx-auto rounded-md overflow-hidden shadow-md">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div
                  className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-30"
                  data-swiper-parallax="-200"
                >
                  <h2 className="text-white text-xl sm:text-2xl font-bold pb-4">Subtitle</h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FoodItemNameSlide;
