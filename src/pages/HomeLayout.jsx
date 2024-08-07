import { Outlet } from "react-router-dom";
import { Header } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>
        <span className="navbar bg-primary-content">Comfy Store</span>
      </nav>
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
