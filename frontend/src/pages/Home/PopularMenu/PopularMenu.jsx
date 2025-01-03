import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import MenuItem from "../../../components/shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

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
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
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
