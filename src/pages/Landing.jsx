import { Hero } from "../components";
import { customFetch } from '../utils'
import { FeaturedProducts } from '../components'

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url)
}

export const loader = (queryClient) => async () => {
  // ensureQueryData() is a React Query method that checks if data for a query already exists in the cache, and if it doesn't, it fetches it.
  // If the data exists and is still fresh, it returns that cached data.
  // If the data doesn't exist or is stale, it executes the queryFn to fetch new data.
  const response = await queryClient.ensureQueryData(featuredProductsQuery);
  const products = response.data.data
  return { products }
};

const Landing = () => {
  return <>
    <Hero />
    <FeaturedProducts />
  </>
};

export default Landing;