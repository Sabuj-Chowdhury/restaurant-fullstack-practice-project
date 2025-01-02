import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Intro from "./Intro/Intro";
import PopularMenu from "./PopularMenu/PopularMenu";
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
      {/* testimonials */}
      <Testimonials></Testimonials>
    </section>
  );
};

export default Home;
