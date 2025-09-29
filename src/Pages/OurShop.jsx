import { Helmet } from "react-helmet-async";
import shopCover from '../assets/shop/banner2.jpg';
import PageCover from "../Components/PageCover";
import MenuTabs from "./OurShopComponents/MenuTabs";

const OurShop = () => {
  return (
    <div>
      <Helmet title="Gen-Z_R|Shop" />
      <PageCover coverImg={shopCover} title={"OUR SHOP"} subTitle={"would you like to try a dish?"} />
      <MenuTabs />
    </div>
  );
};

export default OurShop;
