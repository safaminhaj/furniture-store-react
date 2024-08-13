import { useLoaderData } from "react-router-dom";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils/index";

export const loader = async () => {
  const response = await customFetch("/products");
  // console.log(response.data.data);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, response };
};

const Products = () => {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
};

export default Products;
