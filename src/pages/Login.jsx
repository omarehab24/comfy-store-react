import { Link, Form } from "react-router-dom";
import { SubmitButton, FormInput } from "../components";

const Login = () => {
  return <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 p-8 bg-base-100 shadow-xl flex flex-col gap-y-4">
      <h4 className="text-center font-bold text-3xl">Login</h4>
      <FormInput type="email" label="email" name="indentifier" defaultValue="test@test.com" />
      <FormInput type="password" label="password" name="password" defaultValue="secret" />
      <div>
        <SubmitButton text="Login" />
      </div>
      <button type="button" className="btn btn-secondary btn-block">Guest User</button>
      <p className="text-center">
        Don&apos;t have an account? <Link to="/register" className="ml-2 link link-hover link-primary capitalize">register</Link>
      </p>
    </Form>

  </section>
};

export default Login;