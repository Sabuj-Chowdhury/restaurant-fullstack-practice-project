import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/shared/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import MenuCover from "../../components/MenuCover/MenuCover";
import desertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();

  // filtered data
  const offers = menu.filter((offer) => offer.category === "offered");
  const deserts = menu.filter((desert) => desert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");

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
      <MenuCategory items={offers}></MenuCategory>
      {/* button */}
      <div className="flex justify-center items-center mb-10">
        <button className="uppercase btn btn-outline border-0 border-b-4">
          order your favorite food
        </button>
      </div>

      {/* deserts menu cover */}
      <MenuCover
        img={desertImg}
        heading="Desserts"
        paragraph="Indulge in our heavenly desserts, from rich chocolate lava cakes to creamy cheesecakes, each crafted to satisfy your sweet cravings."
      ></MenuCover>
      <MenuCategory items={deserts}></MenuCategory>
      {/* button */}
      <div className="flex justify-center items-center mb-10">
        <Link to="/shop/Desserts">
          <button className="uppercase btn btn-outline border-0 border-b-4">
            order your favorite food
          </button>
        </Link>
      </div>

      {/* pizza menu cover */}
      <MenuCover
        img={pizzaImg}
        heading="Pizza"
        paragraph="Savor the taste of Italy with our hand-tossed pizzas, topped with fresh ingredients and baked to golden perfection."
      ></MenuCover>
      <MenuCategory items={pizzas}></MenuCategory>
      {/* button */}
      <div className="flex justify-center items-center mb-10">
        <Link to="/shop/Pizza">
          <button className="uppercase btn btn-outline border-0 border-b-4">
            order your favorite food
          </button>
        </Link>
      </div>

      {/* salad menu cover */}
      <MenuCover
        img={saladImg}
        heading="Salad"
        paragraph="Refresh your palate with our vibrant salads, featuring crisp greens, seasonal veggies, and house-made dressings"
      ></MenuCover>
      <MenuCategory items={salads}></MenuCategory>
      {/* button */}
      <div className="flex justify-center items-center mb-10">
        <Link to="/shop/Salad">
          <button className="uppercase btn btn-outline border-0 border-b-4">
            order your favorite food
          </button>
        </Link>
      </div>

      {/* soup menu cover */}
      <MenuCover
        img={soupImg}
        heading="Soup"
        paragraph="Warm your soul with our comforting soups, prepared daily with wholesome ingredients and bursting with flavor."
      ></MenuCover>
      <MenuCategory items={soups}></MenuCategory>
      {/* button */}
      <div className="flex justify-center items-center mb-10">
        <Link to="/shop/Soups">
          <button className="uppercase btn btn-outline border-0 border-b-4">
            order your favorite food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
