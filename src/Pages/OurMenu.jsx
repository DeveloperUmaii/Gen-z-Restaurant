import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import menuCover from "../assets/menu/banner3.jpg";
import dessertCover from "../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../assets/menu/pizza-bg.jpg";
import saladCover from "../assets/menu/salad-bg.jpg";
import soupCover from "../assets/menu/soup-bg.jpg";
import PopularMenu from './HomeComponents/PopularMenu';
import PageCover from "../Components/PageCover";

const OurMenu = () => {
    return (
        <div>
            <Helmet title='Gen-Z_R|Menu' />
            <PageCover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'offered'} buttonTitle={'ORDER YOUR FAVOURITE FOOD'} menuSubHeading={"Don't miss"} menuHeading={"TODAY'S OFFER"} />
            
            <Cover coverImg={dessertCover} title={'Dessert'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'dessert'}  buttonTitle={'ORDER YOUR FAVOURITE FOOD'} />

            <Cover coverImg={pizzaCover} title={'Pizza'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'pizza'} buttonTitle={'ORDER YOUR FAVOURITE FOOD'} />

            <Cover coverImg={saladCover} title={'Salads'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'salads'} buttonTitle={'ORDER YOUR FAVOURITE FOOD'} />

            <Cover coverImg={soupCover} title={'Soups'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'soups'} buttonTitle={'ORDER YOUR FAVOURITE FOOD'} />
        </div>
    );
};

export default OurMenu;