import DishCart from "../../../components/DishCart/DishCart";
import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";

const Recommendation = () => {
  return (
    <section className="mb-10 lg:mb-20">
      <SectionTitle
        heading="chef recommends"
        subHeading="Should Try"
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <DishCart />
        <DishCart />
        <DishCart />
      </div>
    </section>
  );
};

export default Recommendation;
