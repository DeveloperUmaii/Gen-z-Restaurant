import BistroBossBackground from '../assets/home/chef-service.jpg';
import BannerSlide from './HomeComponents/BannerSlide';
import FoodItemNameSlide from './HomeComponents/FoodItemNameSlide';
import BistroBossSection from './HomeComponents/BistroBossSection';
import PopularMenu from './HomeComponents/PopularMenu';
import Featured from './HomeComponents/Featured';
import Contact from './HomeComponents/Contact';
import ChefRecomended from './HomeComponents/ChefRecomended';

const Home = () => {
    return (
        <div
            className="bg-fixed bg-center bg-cover bg-no-repeat py-20 "
            style={{
                backgroundImage: `url(${BistroBossBackground})`
            }}
        >
            <BannerSlide />
            <FoodItemNameSlide />
            <BistroBossSection />
            <PopularMenu />
            <Contact />
            <ChefRecomended />
            <Featured />
        </div>
    );
};

export default Home;