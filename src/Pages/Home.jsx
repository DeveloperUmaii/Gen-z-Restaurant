import BistroBossBackground from '../assets/home/chef-service.jpg';
import BannerSlide from './HomeComponents/BannerSlide';
import FoodItemNameSlide from './HomeComponents/FoodItemNameSlide';
import BistroBossSection from './HomeComponents/BistroBossSection';
import PopularMenu from './HomeComponents/PopularMenu';

const Home = () => {
    return (
        <div
            className="bg-fixed bg-center bg-cover bg-no-repeat py-20"
            style={{
                backgroundImage: `url(${BistroBossBackground})`
            }}
        >
            <BannerSlide />
            <FoodItemNameSlide />
            <BistroBossSection />
            <PopularMenu />
        </div>
    );
};

export default Home;