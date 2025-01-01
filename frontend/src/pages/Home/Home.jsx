import Banner from "./Banner/Banner";
import Category from "./Category/Category";
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
    </div>
  );
};

export default Home;
