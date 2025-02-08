import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitButton from './SubmitButton';
import { customFetch, formatPrice } from '../utils';
import { toast } from 'react-toastify';
import { clearCart } from '../features/cart/cartSlice';

export const action = (store) => async ({ request }) => {
  const formData = await request.formData();
  const { name, address } = Object.fromEntries(formData);
  const user = store.getState().userState.user;
  const { cartItems, orderTotal, numItemsInCart } = store.getState().cartState;
  const info = {
    name,
    address,
    orderTotal: formatPrice(orderTotal), // for display
    chargeTotal: orderTotal, // for the payment provider
    numItemsInCart,
    cartItems
  }
  try {
    await customFetch.post("/orders", { data: info }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    store.dispatch(clearCart());
    toast.success("Order placed successfully!");
    return redirect("/orders");
  } catch (error) {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      toast.error("You must be logged in to place an order");
      return redirect("/login");
    }
    const errorMessage = error?.response?.data?.error?.message || "Something went wrong";
    toast.error(errorMessage);
    return null;
  }
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