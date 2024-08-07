import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 shadow-lg bg-base-100  p-8 gap-y-4"
      >
        <h4 className="text-3xl text-center font-bold">Login</h4>
        <FormInput
          label="Email"
          type="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn className="btn btn-primary" text="LOGIN" />
        </div>
        <button type="button" className="btn btn-secondary btn-block ">
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
