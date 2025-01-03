import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import shopImg from "../../assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>

      {/* Cover */}
      <PageCover
        img={shopImg}
        heading="our shop"
        subHeading="would you like to try a dish?"
      ></PageCover>
    </div>
  );
};

export default OurShop;
