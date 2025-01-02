import { useEffect, useState } from "react";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import MenuItem from "../../../components/shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  //   console.log(menu);

  return (
    <section className="mb-10">
      <SectionTitle
        heading="from our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {menu.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
