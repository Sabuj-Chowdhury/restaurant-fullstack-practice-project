import SectionTitle from "../../../components/shared/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="relative mb-10 bg-featured-bg bg-no-repeat bg-center bg-fixed text-white pt-10">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* Content */}
      <div className="relative z-10">
        <SectionTitle
          subHeading="Check it out"
          heading="FROM OUR MENU"
        ></SectionTitle>
        <div className="md:flex justify-center items-center py-20 px-10 md:px-36 gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img src={featuredImg} alt="Featured Dish" className="rounded-lg" />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <p className="text-gray-400">March 20, 2023</p>
            <p className="uppercase text-2xl font-semibold">
              WHERE CAN I GET SOME?
            </p>
            <p className="text-gray-300">
              Indulge in the culinary highlight of our menu—our featured item.
              Expertly crafted with the finest ingredients, this dish blends
              bold flavors and exquisite presentation to deliver a truly
              memorable dining experience. Perfectly paired with your favorite
              drink, it’s a must-try for food enthusiasts seeking a taste of
              perfection!
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white hover:text-gray-300">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
