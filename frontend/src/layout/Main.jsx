import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const Main = () => {
  const location = useLocation();

  const isLogin = location.pathname.includes("/login");
  // console.log(isLogin);

  return (
    <div>
      {/* navbar */}
      {isLogin || <Navbar></Navbar>}
      <div className="min-h-[calc(100vh-340px)]">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default Main;
