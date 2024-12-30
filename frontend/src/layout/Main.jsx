import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/footer.jsx/footer";

const Main = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default Main;
