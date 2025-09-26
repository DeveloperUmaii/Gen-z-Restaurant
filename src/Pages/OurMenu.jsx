import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import menuCover from "../assets/menu/banner3.jpg";
import PopularMenu from './HomeComponents/PopularMenu';
import PageCover from "../Components/PageCover";

const OurMenu = () => {
    return (
        <div>
            <Helmet title='Gen-Z_R|Menu' />
            <PageCover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu categoryFilter={'drinks'} />
            
            <Cover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu />
            <Cover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu />
            <Cover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu />
            <Cover coverImg={menuCover} title={'our menu'} subTitle={'would you like to try a dish?'} />
            <PopularMenu />
        </div>
    );
};

export default OurMenu;