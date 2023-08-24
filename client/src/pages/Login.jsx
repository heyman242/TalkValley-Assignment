import { Form, redirect, Link } from "react-router-dom";
import { FormRow } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <div>
      <Form method="post">
        <h1>Login Page</h1>
        <FormRow type="email" name="email" />
        <FormRow type="password" name="password" />
        <button type="submit">Submit</button>
        <p>
          not a member yet!
          <Link to="/register">register page</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
