import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <span className="navbar bg-primary-content">Comfy Store</span>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
