import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Intro from "./Intro/Intro";
import PopularMenu from "./PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
