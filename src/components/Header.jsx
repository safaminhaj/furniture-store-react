import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral text-neutral-content py-2 ">
      <div className="flex justify-center sm:justify-end align-element">
        <div className="flex items-center justify-center gap-6 ">
          <Link className="link link-hover" to="/login">
            Sign in /Guest
          </Link>
          <Link className="link link-hover" to="/register">
            Create an account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
