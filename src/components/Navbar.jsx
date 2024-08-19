import { BsMoonFill, BsSunFill, BsCart3 } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="text-2xl" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
          <label className="swap swap-rotate items-center">
            <input
              type="checkbox"
              onChange={handleTheme}
              // checked={theme === themes.winter ? false : true}
            />
            <BsSunFill className="swap-on" />
            <BsMoonFill className="swap-off" />
          </label>
          {/* <BsMoonFill /> */}
          <NavLink to="cart" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <BsCart3 className="text-2xl" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
