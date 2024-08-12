import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import { ErrorElement } from "./components";

//loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as SingleProductLoader } from "./pages/SingleProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: LandingLoader,
        errorElement: <ErrorElement />,
      },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: SingleProductLoader,
        errorElement: <ErrorElement />,
      },
    ],
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
