import { Helmet } from "react-helmet-async";
import PageCover from "../../components/PageCover/PageCover";
import shopImg from "../../assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./OurShop.css";
import useMenu from "../../hooks/useMenu";
import TabCard from "./TabCard/TabCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["Salad", "Pizza", "Soups", "Desserts", "Drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const deserts = menu.filter((desert) => desert.category === "dessert");
  const pizzas = menu.filter((pizza) => pizza.category === "pizza");
  const salads = menu.filter((salad) => salad.category === "salad");
  const soups = menu.filter((soup) => soup.category === "soup");
  const drinks = menu.filter((drink) => drink.category === "drinks");
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

      <Tabs
        className="text-center mb-5"
        selectedIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <TabCard items={salads}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={pizzas}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={soups}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={deserts}></TabCard>
        </TabPanel>
        <TabPanel>
          <TabCard items={drinks}></TabCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
