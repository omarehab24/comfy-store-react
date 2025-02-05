import { FormInput, SubmitButton } from '../components';
import { Form, Link, redirect, useNavigate } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { login } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

// Since the action is immediately invoked in the login router, we make action a function that returns a function
export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local", data)
    store.dispatch(login(response.data));
    toast.success("Logged in successfully!");
    return redirect("/");
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || "Something went wrong";
    toast.error(errorMessage);
    return null;
  }
}

const Login = () => {
  return <section className="h-screen grid place-items-center">
    <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
      <h4 className="text-center font-bold text-3xl">Login</h4>
      <FormInput type="email" label="email" name="identifier" defaultValue="test@test.com" />
      <FormInput type="password" label="password" name="password" defaultValue="secret" />
      <div className="mt-4">
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