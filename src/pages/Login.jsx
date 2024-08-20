import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Logged in successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "please double check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });
      dispatch(loginUser(response.data));
      toast.success("Welcome guest user!");
      navigate("/");
    } catch (error) {
      console.log(error);
      const errorMessage = error?.response?.data?.error?.message;
      toast.error(errorMessage);
    }
  };
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 shadow-lg bg-base-100  p-8 gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput label="Email" type="email" name="identifier" />
        <FormInput label="Password" type="password" name="password" />
        <div className="mt-4">
          <SubmitBtn className="btn btn-primary" text="LOGIN" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          GUEST USER
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link className="link link-hover link-primary" to="/register">
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
