import { Link, useLoaderData } from "react-router-dom";
import { centsToDollars } from "../utils";

const ProductsGrid = () => {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 grid gap-4 lg:grid-cols-3 md:grid-cols-2">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl  transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="object-cover w-full  h-64 md:h-48 rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{centsToDollars(price)}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
