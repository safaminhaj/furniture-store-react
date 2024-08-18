import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { removeItem, editItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, image, company, title, amount, productColor, price } =
    cartItem;
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg object-cover"
      />
      <div className="sm:ml-16 sm:w-48">
        <h3 className="font-medium capitalize">{title}</h3>
        <h4 className="mt-2 capitalize text-neutral-content text-sm">
          {company}
        </h4>
        <p className="mt-4 capitalize flex items-center text-sm gap-x-2">
          color :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control  max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select select-bordered select-xs mt-2"
            onChange={handleAmount}
            value={amount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        <button
          className="mt-2 link link-primary link-hover text-sm"
          onClick={removeItemFromCart}
        >
          remove
        </button>
      </div>
      <p className="sm:ml-auto font-medium">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
