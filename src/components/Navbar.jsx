import { BsMoonFill, BsSunFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-sky-100">
      <div className="navbar align-element">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="tabIndex={0} btn btn-ghost lg:hidden"
            >
              <FaBarsStaggered className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-sky-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl ">
            C
          </NavLink>
        </div>
        {/*below class explained - hidden by default, set as flex once we get to the big screen */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <BsMoonFill />
          <NavLink to="cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsCart3 className="text-2xl" />
              <span className="badge badge-sm badge-primary indicator-item">
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
