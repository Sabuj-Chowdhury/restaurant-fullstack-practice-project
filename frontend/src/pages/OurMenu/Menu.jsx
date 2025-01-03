import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";

const Menu = () => {
  return (
    <section className="">
      {/* title  */}
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* cover */}
      <PageCover
        img={menuImg}
        heading="our menu"
        subHeading="would you like to try a dish?"
      ></PageCover>

      {/* today's offer */}
      <SectionTitle
        heading="today's offer"
        subHeading="Don't miss"
      ></SectionTitle>
    </section>
  );
};

export default Menu;
