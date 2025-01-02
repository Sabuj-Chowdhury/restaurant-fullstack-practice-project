import PropTypes from "prop-types";

const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item || {};
  return (
    <div className="flex space-x-5">
      <img
        style={{
          borderRadius: "0 200px 200px",
        }}
        className="w-28"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name} -------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;

MenuItem.propType = {
  item: PropTypes.object,
};
