import { Link, Form } from "react-router-dom";
import { SubmitButton, FormInput } from "../components";

const Register = () => {
  return <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4 className="text-center font-bold text-3xl">Register</h4>
      <FormInput type="text" label="username" name="username" />
      <FormInput type="email" label="email" name="email" />
      <FormInput type="password" label="password" name="password" />
      <div className="mt-4">
        <SubmitButton text="Register" />
      </div>
      <p className="text-center">
        Already have an account? <Link to="/login" className="ml-2 link link-hover link-primary capitalize">login</Link>
      </p>
    </Form>
  </section>
};

export default Register;