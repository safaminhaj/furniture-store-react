import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { OrdersList, PaginationContainer, SectionTitle } from "../components";

//using params for pagination
export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in!");
      return redirect("/login");
    }
    // readme - line 2440
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch("/orders", {
        params,
        headers: { Authorization: `Bearer ${user.token}` },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.log(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      if (error.response.status === (401 || 403)) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  const numOfOrders = meta.pagination.total;
  if (numOfOrders === 0) return <SectionTitle text="please make an order" />;
  return (
    <div>
      <SectionTitle text="your orders" />
      <OrdersList />
      <PaginationContainer />
    </div>
  );
};

export default Orders;
