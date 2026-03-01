import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SecTionTitle from "../../Components/SecTionTitle";
import slide1 from "../../assets/home/Golden Roasted Herbs with Vegetables.jpg";
import slide2 from "../../assets/home/Blueberry Banana Drizzling Pancake Stack.jpg";
import slide3 from "../../assets/home/Silky Poached Egg on Avocado Bruschetta.jpg";
import slide4 from "../../assets/home/Signature Grilled Burger and Club Sandwich Fusion.jpg";
import slide5 from "../../assets/home/Garden Fusion Morning Delight Bowl.jpg";
import slide6 from "../../assets/home/Nutritional Vegetable Fusion Bowl.jpg";
import slide7 from "../../assets/home/Zesty Grilled Chicken Wraps with Dip Sauce.jpg"; // আপনার ফোল্ডার অনুযায়ী নাম চেক করে নিন
import slide8 from "../../assets/home/Fresh Crunchy Vegetable Garden Salad.jpg";
import slide9 from "../../assets/home/Spicy Egg and Avocado Breakfast Toast.jpg"; // আপনার ফোল্ডার অনুযায়ী নাম চেক করে নিন
import slide10 from "../../assets/home/Signature avocado Breakfast Toast.jpg";
import slide11 from "../../assets/home/Oatmeal with fresh Berry Topping.jpg";
import slide12 from "../../assets/home/Fresh Green Garden Salad.jpg";
import slide13 from "../../assets/home/Classic Sunny-Side Up Egg Toast Platter.jpg";
import slide14 from "../../assets/home/Protin-Packed Crispy Tofu Salad.jpg";

const FoodItemNameSlide = () => {
 const sliderImages = [
  { id: 1, bannerImage: slide1, bannerTitle: "Golden Roasted Herb" },
  { id: 2, bannerImage: slide2, bannerTitle: "Blueberry Banana Delight" },
  { id: 3, bannerImage: slide3, bannerTitle: "Silky Poached Egg" },
  { id: 4, bannerImage: slide4, bannerTitle: "Signature Grilled Burger" },
  { id: 5, bannerImage: slide5, bannerTitle: "Garden Fusion Morning" },
  { id: 6, bannerImage: slide6, bannerTitle: "Nutritional Vegetable" },
  { id: 7, bannerImage: slide7, bannerTitle: "Zesty Grilled Chicken" },
  { id: 8, bannerImage: slide8, bannerTitle: "Fresh Crunchy Vegetable" },
  { id: 9, bannerImage: slide9, bannerTitle: "Spicy Egg and Avocado" },
  { id: 11, bannerImage: slide10, bannerTitle: "Signature Avocado" },
  { id: 12, bannerImage: slide11, bannerTitle: "Oatmeal with Fresh Fruit" },
  { id: 13, bannerImage: slide12, bannerTitle: "Fresh Green Garden" },
  { id: 14, bannerImage: slide13, bannerTitle: "Classic Sunny-Side Up" },
  { id: 15, bannerImage: slide14, bannerTitle: "Protein-Packed Crispy" },
];

  return (
    <>
      <SecTionTitle subHeading={"date/time"} heading={"Subject"} />
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
          className="mySwiper">
          
          {/* {[foodItemBannerSliderImg1, foodItemBannerSliderImg2, foodItemBannerSliderImg3, foodItemBannerSliderImg4, foodItemBannerSliderImg5,].map((img, index) => ( */}
          {sliderImages.map((sliderImage) => (
            <SwiperSlide key={sliderImage.id}>
              <div className="relative w-full max-w-sm mx-auto rounded-md overflow-hidden shadow-md">
                
                <img
                  src={sliderImage.bannerImage}
                  alt={`Slide ${sliderImage.id}`}
                  className="w-full h-64 object-cover"
                />

                <div
                  className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-30"
                  data-swiper-parallax="-200"
                >
                  <h2 className="text-white text-center text-xl sm:text-2xl font-bold pb-4">
                    {sliderImage.bannerTitle}
                  </h2>
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
