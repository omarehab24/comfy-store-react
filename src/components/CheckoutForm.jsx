import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action = (store) => async ({ request }) => {
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  // try {
  //   await customFetch.post("/orders", data);
  //   store.dispatch(clearCart());
  //   return redirect("/orders");
  // } catch (error) {
  //   const errorMessage = error?.response?.data?.error?.message || "Something went wrong";
  //   toast.error(errorMessage);
  //   return null;
  // }
  console.log(store.getState());

  return null
}

function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div className='mt-4'>
        <SubmitButton text="PLACE ORDER" />
      </div>
    </Form>
  )
}
export default CheckoutForm