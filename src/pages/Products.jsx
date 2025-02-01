import { Filters, ProductsContainer, PaginationContainer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = '/products';

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  const products = response.data.data
  const meta = response.data.meta
  return { products, meta }
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