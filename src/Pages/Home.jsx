import BannerSlide from "../Components/BannerSlide";
import FoodItemNameSlide from "../Components/FoodItemNameSlide";

const Home = () => {

    return (
        <div>
            <BannerSlide />
            <h1 className='text-9xl text-center mt-10'>home</h1>
            <FoodItemNameSlide />
        </div>
    );
};

export default Home;
