import BistroBossBackground from "../assets/home/chef-service.jpg";
import BannerSlide from "./HomeComponents/BannerSlide";
import FoodItemNameSlide from "./HomeComponents/FoodItemNameSlide";
import BistroBossSection from "./HomeComponents/BistroBossSection";
import PopularMenu from "./HomeComponents/PopularMenu";
import Featured from "./HomeComponents/Featured";
import Contact from "./HomeComponents/Contact";
import ChefRecomended from "./HomeComponents/ChefRecomended";
import Testimonials from "./HomeComponents/Testimonials";
import { Helmet } from "react-helmet-async";
// import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover bg-no-repeat py-20 "
      style={{
        backgroundImage: `url(${BistroBossBackground})`,
      }}
    >
      <Helmet title="Gen-Z_R|Home" />
      <Helmet title="" />
      <FoodItemNameSlide />
      <BistroBossSection />
      <PopularMenu
        categoryFilter={"popular"}
        menuSubHeading={"Check it out"}
        menuHeading={"FROM OUR MENU"}
        buttonTitle={"View full menu"}
      />
      <Contact />
      <ChefRecomended />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
