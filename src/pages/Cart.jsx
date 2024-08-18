import { useSelector } from "react-redux";
import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { Link } from "react-router-dom";

const Cart = () => {
  //temp
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);
  if (numItemsInCart === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <>
      <SectionTitle text="Shopping cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link to="/checkout" className="btn btn-block btn-primary mt-8">
              PROCEED TO CHECKOUT
            </Link>
          ) : (
            <Link to="/login" className="btn btn-block btn-primary mt-8">
              PLEASE LOGIN
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
