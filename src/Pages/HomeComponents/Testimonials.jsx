import SecTionTitle from "../../Components/SecTionTitle";
import { Swiper, SwiperSlide } from "swiper/react"; // ✅
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="">
      <div className="">
        <SecTionTitle
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        />
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="flex flex-col justify-center items-center my-6">
              <div className="">
                <Rating  className="flex w-56 h-8 " value={review?.rating} readOnly />
              </div>
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="56"
                  viewBox="0 0 100 86"
                  fill="none"
                >
                  <path
                    d="M34.615 39.154h-13.462c-1.603 0-2.965-.561-4.087-1.683-1.121-1.122-1.683-2.484-1.683-4.087v-1.922c0-4.247 1.503-7.872 4.508-10.878 3.005-3.004 6.631-4.507 10.878-4.507h3.846c1.042 0 1.943-.381 2.705-1.142.761-.761 1.142-1.662 1.142-2.704V4.539c0-1.042-.381-1.944-1.142-2.705-.761-.76-1.662-1.141-2.704-1.141h-3.846c-4.167 0-8.142.812-11.929 2.434C15.054 4.749 11.779 6.943 9.014 9.708c-2.764 2.764-4.957 6.039-6.58 9.826C.812 23.319 0 27.295 0 31.462v42.307c0 3.206 1.121 5.929 3.365 8.174C5.609 84.186 8.334 85.308 11.539 85.308h23.077c3.205 0 5.929-1.122 8.173-3.365 2.244-2.244 3.366-4.967 3.366-8.174V50.693c0-3.206-1.122-5.929-3.366-8.174-2.243-2.243-4.969-3.365-8.174-3.365Z"
                    fill="#151515"
                  />
                  <path
                    d="M96.637 42.519c-2.243-2.243-4.968-3.365-8.173-3.365H75.002c-1.602 0-2.965-.561-4.085-1.683-1.122-1.122-1.683-2.484-1.683-4.087v-1.922c0-4.247 1.503-7.872 4.506-10.878 3.004-3.004 6.63-4.507 10.879-4.507h3.846c1.042 0 1.944-.381 2.705-1.142.761-.761 1.142-1.662 1.142-2.704V4.539c0-1.042-.382-1.944-1.143-2.705-.761-.76-1.663-1.141-2.705-1.141h-3.845c-4.169 0-8.144.812-11.932 2.434-3.785 1.623-7.059 3.817-9.824 6.582-2.765 2.764-4.959 6.039-6.581 9.826C54.66 23.319 53.848 27.295 53.848 31.462v42.307c0 3.206 1.122 5.929 3.365 8.174 2.243 2.243 4.968 3.365 8.173 3.365h23.076c3.206 0 5.93-1.122 8.173-3.365 2.245-2.244 3.365-4.967 3.365-8.174V50.693c0-3.207-1.12-5.93-3.363-8.174Z"
                    fill="#151515"
                  />
                </svg>
              </div>
              <p className="text-[#fff] text-center w-9/12">
                {review?.details}
              </p>
              <h2 className="font-bold text-orange-400 py-2 text-xl font-serif">{review?.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
