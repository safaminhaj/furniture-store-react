import { IoGrid } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";

const ProductsContainer = () => {
  const { products } = useLoaderData();
  const [showGrid, setShowGrid] = useState(true);
  return (
    <div>
      <div className="flex justify-between">
        <span>{`${products.length} products`}</span>
        <span className="flex gap-4">
          <button onClick={() => setShowGrid(true)}>
            <IoGrid className="text-xl font-bold" />
          </button>
          <button onClick={() => setShowGrid(false)}>
            <BsList className="text-xl font-bold" />
          </button>
        </span>
      </div>
      <div>{showGrid ? <ProductsGrid /> : <ProductsList />}</div>
    </div>
  );
};

export default ProductsContainer;
