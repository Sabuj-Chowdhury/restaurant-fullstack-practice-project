import PropTypes from "prop-types";
import MenuItem from "../../../components/shared/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  //   console.log(typeof items);

  return (
    <div className="grid md:grid-cols-2 gap-10 mb-5">
      {items.map((item, idx) => (
        <MenuItem key={idx} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default MenuCategory;

MenuCategory.propTypes = {
  items: PropTypes.array,
};
