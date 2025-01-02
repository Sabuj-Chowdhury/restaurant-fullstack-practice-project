import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";

const Navbar = () => {
  const navOptions = (
    <>
      <li className="uppercase font-bold text-sm">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="uppercase font-bold  text-sm">
        <NavLink to="/menu">Our menu</NavLink>
      </li>

      <li className="uppercase font-bold  text-sm">
        <NavLink>Contact Us</NavLink>
      </li>
      <li className="uppercase font-bold  text-sm">
        <NavLink>Dashboard</NavLink>
      </li>

      <li className="uppercase font-bold  text-sm">
        <NavLink>Our Shop</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-50 bg-opacity-40 max-w-7xl bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* Nav options */}
            {navOptions}
          </ul>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="uppercase font-extrabold text-2xl">Bistro Boss</p>
          <p className="uppercase font-extralight text-lg">
            R e s t a u r a n t
          </p>
        </div>
      </div>
      <div className="navbar-center hidden items-center justify-center gap-2 lg:flex">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-2">
          {/* nav options */}
          {navOptions}
        </ul>
        {/* Cart Icon */}
        <div className="text-2xl border rounded-full p-2 text-white bg-black">
          <PiShoppingCartBold />
        </div>
        <NavLink>
          <button
            className="
  uppercase btn "
          >
            Sign in
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
