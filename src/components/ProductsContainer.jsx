import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const totalProducts = meta.pagination.total;
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-sm btn-circle ${
      pattern === layout
        ? "btn-primary text-primary-content "
        : "btn-ghost text-base-content"
    }`;
  };
  return (
    <div>
      <div className="flex justify-between items-center border-b border-base-300 mt-8 pb-5">
        <h4 className="text-md font-medium">
          {totalProducts} product{totalProducts > 1 && "s"}
        </h4>
        <div className="flex gap-x-4">
          <button
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <IoGrid className="text-xl font-bold" />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList className="text-xl font-bold" />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry,no products matched your search...</h5>
        ) : layout === "grid" ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </div>
  );
};

export default ProductsContainer;
