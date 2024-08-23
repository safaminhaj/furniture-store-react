import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const user = useSelector((state) => state.userState.user);
  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };
  return (
    <header className="bg-neutral text-neutral-content py-2 ">
      <div className="flex justify-center sm:justify-end align-element">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              className="btn btn-xs btn-primary btn-outline"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-6 ">
            <Link className="link link-hover" to="/login">
              Sign in /Guest
            </Link>
            <Link className="link link-hover" to="/register">
              Create an account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
