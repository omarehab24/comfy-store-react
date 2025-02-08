import { redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { customFetch } from '../utils';
import { OrdersList, PaginationContainer, SectionTitle } from '../components';

export const loader = (store) => async ({ request }) => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn('You must be logged in to place an order');
    return redirect('/login');
  }
  // equivalent to:
  // const url = new URL(request.url);
  // const searchParams = url.searchParams;
  // const paramsArray = [...searchParams];
  // const params = Object.fromEntries(paramsArray);
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
  // Also see https://developer.mozilla.org/en-US/docs/Web/API/URL
  const params = Object.fromEntries([...new URL(request.url).searchParams]);
  console.log("params: ", params)
  try {
    const response = await customFetch.get('/orders', {
      params,
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    return { orders: response.data.data, meta: response.data.meta };
  } catch (error) {
    console.log("error: ", error)
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      toast.error('You must be logged in to place an order');
      return redirect('/login');
    }
    const errorMessage = error?.response?.data?.error?.message || "Something went wrong";
    toast.error(errorMessage);
    return null
  }
}

const Orders = () => {
  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default Orders;