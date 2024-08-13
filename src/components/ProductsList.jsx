import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";

const ProductsList = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => {
        const { image, title, price, company } = product.attributes;
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="shadow-xl rounded-lg flex flex-col sm:flex-row flex-wrap  gap-y-4 p-8 hover:shadow-2xl duration-300 group"
          >
            <figure>
              <img
                src={image}
                className="h-24 w-24 sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 rounded-lg"
              />
            </figure>
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="ml-0 font-medium sm:ml-auto text-lg ">
              {formatPrice(price)}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsList;
