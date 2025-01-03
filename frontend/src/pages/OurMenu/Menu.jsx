import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import menuImg from "../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <PageCover
        img={menuImg}
        heading="our menu"
        subHeading="would you like to try a dish?"
      ></PageCover>
    </div>
  );
};

export default Menu;
