import { useLoaderData } from 'react-router-dom';
import { formatPrice, customFetch, generateAmountOptions } from '../utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, company, colors } = product.attributes
  const priceUSD = formatPrice(price)

  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const dispatch = useDispatch()

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    title,
    image,
    price,
    company,
    productColor,
    amount
  }

  const addToCartHandler = () => {
    dispatch(addItem({ product: cartProduct }))
  }

  const handleAmount = (e) => {
    setAmount(e.target.value)
  }

  return <section>
    <div className='text-md breadcrumbs'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </div>
    {/* PRODUCT */}
    <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
      {/* IMAGE */}
      <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
      <div>
        {/* TITLE, COMPANY, PRICE & DESCRIPTION */}
        <h1 className='text-3xl font-bold capitalize'>{title}</h1>
        <h4 className='text-xl font-bold mt-2'>{company}</h4>
        <p className='mt-3 text-xl'>{priceUSD}</p>
        <p className='mt-6 leading-8'>{description}</p>
        {/* COLOR */}
        <div className='mt-6'>
          <h4 className='text-md font-medium tracking-wider capitalize'>
            colors
          </h4>
          <div className="mt-2">
            {
              colors.map((color) => {
                return <button key={color} type='button' className={`badge w-6 h-6 mr-2 ${color === productColor && 'border-2 border-secondary'}`} onClick={() => setProductColor(color)} style={{ backgroundColor: color }}></button>
              })
            }
          </div>
        </div>
        {/* AMOUNT */}
        <div className="form-control w-full max-w-xs mt-2">
          <label className='label' htmlFor='amount'>
            <h4 className='text-md font-medium tracking-wider capitalize'>amount</h4>
          </label>
          <select id="amount" className='select select-bordered select-secondary select-md' value={amount} onChange={handleAmount}>
            {generateAmountOptions(20)}
          </select>
        </div>
        {/* CART */}
        <div className='mt-10'>
          <button className='btn btn-secondary btn-md' onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  </section>
};

export default SingleProduct;