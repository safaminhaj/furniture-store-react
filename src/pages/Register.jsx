import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card p-8 w-96 gap-y-4 shadow-lg bg-base-100"
      >
        <h4 className="text-3xl text-center font-bold">Register</h4>
        <FormInput
          label="Username"
          type="text"
          name="username"
          defaultValue=""
        />
        <FormInput label="Email" type="email" name="email" defaultValue="" />
        <FormInput
          label="Password"
          type="password"
          name="password"
          defaultValue=""
        />
        <div className="mt-4">
          <SubmitBtn text="REGISTER" />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link to="/login" className="link link-primary link-hover ml-2">
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
