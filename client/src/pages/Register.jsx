import { Form, redirect, Link } from "react-router-dom";
import {FormRow} from '../components'
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};

const Register = () => {
  return (
    <div>
      <Form method="post" className="form">
       
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="email" />
        <FormRow type="text" name="password" />
       <button type="submit">Register</button>
        <p>
          Already a member?
          <Link to="/login">
            Login
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Register;
