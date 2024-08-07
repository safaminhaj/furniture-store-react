import { Outlet } from "react-router-dom";
import { Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      {/* <nav>
        <span className="navbar bg-primary-content">Comfy Store</span>
      </nav> */}
      <section className="align-element">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
