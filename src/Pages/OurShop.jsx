import { Helmet } from "react-helmet-async";
import shopCover from "../assets/shop/banner2.jpg";
import PageCover from "../Components/PageCover";
import MenuTab from "./OurShopComponents/MenuTab";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const { category } = useParams();
  return (
    <div>
      <Helmet> <title>{`Gen-Z_R | Shop/${category}`}</title> </Helmet>

      <PageCover
        coverImg={shopCover}
        title={"OUR SHOP"}
        subTitle={"would you like to try a dish?"}
      />
      <MenuTab />
    </div>
  );
};

export default OurShop;
