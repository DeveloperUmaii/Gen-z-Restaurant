// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
import { Pagination, } from 'swiper/modules';

import foodItemBannerSliderImg1 from '../assets/home/slide1.jpg';
import foodItemBannerSliderImg2 from '../assets/home/slide2.jpg';
import foodItemBannerSliderImg3 from '../assets/home/slide3.jpg';
import foodItemBannerSliderImg4 from '../assets/home/slide4.jpg';
import foodItemBannerSliderImg5 from '../assets/home/slide5.jpg';
import SecTionTitle from './SecTionTitle';

const FoodItemNameSlide = () => {
    return (
        <>
            <SecTionTitle subHeading={'date/time'} heading={'Subject'} />
            <div className="px-12 py-8">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={-70}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >

                    <SwiperSlide>
                        <div className="relative w-8/12 h-9/12">
                            <img
                                src={foodItemBannerSliderImg1}
                                alt="Slide Image"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-10"
                                data-swiper-parallax="-200"
                            >
                                <h2 className="text-white text-4xl font-bold pb-16">Subtitle</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-8/12 h-9/12">
                            <img
                                src={foodItemBannerSliderImg2}
                                alt="Slide Image"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-10"
                                data-swiper-parallax="-200"
                            >
                                <h2 className="text-white text-4xl font-bold pb-16">Subtitle</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-8/12 h-9/12">
                            <img
                                src={foodItemBannerSliderImg3}
                                alt="Slide Image"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-10"
                                data-swiper-parallax="-200"
                            >
                                <h2 className="text-white text-4xl font-bold pb-16">Subtitle</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-8/12 h-9/12">
                            <img
                                src={foodItemBannerSliderImg4}
                                alt="Slide Image"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-10"
                                data-swiper-parallax="-200"
                            >
                                <h2 className="text-white text-4xl font-bold pb-16">Subtitle</h2>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="relative w-8/12 h-9/12">
                            <img
                                src={foodItemBannerSliderImg5}
                                alt="Slide Image"
                                className="w-full h-full object-cover"
                            />

                            <div
                                className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-10"
                                data-swiper-parallax="-200"
                            >
                                <h2 className="text-white text-4xl font-bold pb-16">Subtitle</h2>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </>
    );
};

export default FoodItemNameSlide;
