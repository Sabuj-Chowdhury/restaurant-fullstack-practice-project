import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Intro from "./Intro/Intro";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommendation from "./Recomemndation/Recommendation";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <section>
      {/* Banner */}
      <Banner></Banner>
      {/* Category */}
      <Category></Category>
      {/* Intro */}
      <Intro></Intro>
      {/* menu */}
      <PopularMenu></PopularMenu>
      {/* featured */}
      <Featured></Featured>
      {/* Phone Number */}
      <PhoneNumber></PhoneNumber>
      {/* Recommendation */}
      <Recommendation></Recommendation>
      {/* testimonials */}
      <Testimonials></Testimonials>
    </section>
  );
};

export default Home;
