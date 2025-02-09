import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = '/products';

export const loader = (queryClient) => async ({ request }) => {
  // params: {
  //     "search": "",
  //     "category": "all",
  //     "company": "all",
  //     "order": "a-z",
  //     "price": "100000"
  // }
  // new URL(request.url).searchParams -- returns an iterable URLSearchParams object
  // The Object.fromEntries() static method transforms a list of key-value pairs into an object.
  const params = Object.fromEntries(new URL(request.url).searchParams);
  const response = await customFetch(url, { params });
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta, params }
}

const Products = () => {
  const { products, meta } = useLoaderData()

  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
};

export default Products;