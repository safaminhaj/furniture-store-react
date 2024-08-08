import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const images = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="flex flex-wrap mt-20 gap-20">
      <div className="flex flex-col sm:w-[50%] mt-5">
        <h1 className="text-4xl sm:text-6xl font-bold leading-none tracking-tight">
          We are changing the way people shop
        </h1>
        <p className="leading-8 text-lg my-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repellat
          nesciunt quaerat id magnam pariatur quis beatae molestias fuga eos?
        </p>
        <div className="btn btn-primary max-w-36">
          <Link to="/products">OUR PRODUCTS</Link>
        </div>
      </div>
      <div className="hidden lg:carousel carousel-center flex-1  bg-neutral  rounded-box space-x-3 p-4 w-80  h-[28rem]">
        <div className="carousel-item">
          <img
            src={hero1}
            alt=""
            className="rounded-box h-full w-80  object-cover"
          />
        </div>
        <div className="carousel-item">
          <img src={hero2} alt="" className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={hero3} alt="" className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={hero4} alt="" className="rounded-box" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
