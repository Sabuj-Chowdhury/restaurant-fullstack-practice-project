import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../../OurMenu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []);
  //   console.log(menu);

  return (
    <section className="mb-10 ">
      <SectionTitle
        heading="from our menu"
        subHeading="Check it out"
      ></SectionTitle>
      <MenuCategory items={popular}></MenuCategory>
      {/* button */}
      <div className=" flex justify-center">
        <button className="btn btn-outline border-0  border-b-2 mt-5 flex justify-center items-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
