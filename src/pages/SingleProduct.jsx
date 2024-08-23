import { Link, useLoaderData } from "react-router-dom";
import {
  customFetch,
  formatPrice,
  generateAmountOptions,
} from "../utils/index";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );
    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, company, price, description, colors } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };
  return (
    <section>
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"products"}>Products</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col md:flex-row  mt-6 gap-8">
        <div className="w-1/2">
          <img
            src={image}
            alt={title}
            className="w-96 h-96 object-cover rounded-lg lg:w-[94%]"
          />
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formatPrice(price)}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="capitalize tracking-wider text-md font-medium">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge h-6 w-6 mr-2 ${
                      productColor === color && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <h4 className="capitalize tracking-wider text-md font-medium">
                amount
              </h4>
            </label>
            <select
              className="select select-bordered select-md select-secondary"
              id="amount"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(10)}
            </select>
          </div>
          <div className="mt-10">
            <button className="btn btn-secondary" onClick={addToCart}>
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
