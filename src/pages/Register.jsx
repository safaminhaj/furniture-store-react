import { FormInput, SubmitBtn } from "../components";
import { Form, Link, redirect } from "react-router-dom";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/local/register", data);
    toast.success("account created successfully");
    return redirect("/login");
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message;
    toast.error(errorMessage);
  }
  return null;
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card p-8 w-96 gap-y-4 shadow-lg bg-base-100"
      >
        <h4 className="text-3xl text-center font-bold">Register</h4>
        <FormInput label="Username" type="text" name="username" />
        <FormInput label="Email" type="email" name="email" />
        <FormInput label="Password" type="password" name="password" />
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
