import FoodCart from "../../../components/FoodCart/FoodCart";

const TabCard = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3">
      {items.map((item, idx) => (
        <FoodCart key={idx} item={item}></FoodCart>
      ))}
    </div>
  );
};

export default TabCard;
