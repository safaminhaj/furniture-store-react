import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("You must be logged in to checkout!");
    return redirect("/login");
  }
  return null;
};

const Checkout = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return <SectionTitle text="your cart is empty" />;
  }
  return (
    <section>
      <SectionTitle text="please place your order" />
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <CheckoutForm />
        <CartTotals />
      </div>
    </section>
  );
};

export default Checkout;
