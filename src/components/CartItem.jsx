import { formatPrice, generateAmountOptions } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

function CartItem({ cartItem }) {
    const { cartID, title, image, price, amount, company, productColor } = cartItem;
    const dispatch = useDispatch();

    const handleAmount = (e) => {
        dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
    }

    const removeItemHandler = () => dispatch(removeItem({ cartID }));

    return (
        <article className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'>
            {/* IMAGE */}
            <img className='w-24 h-24 object-cover rounded sm:w-32 sm:h-32' src={image} alt={title} />
            {/* INFO */}
            <div className='sm:ml-16 sm:w-48'>
                {/* TITLE */}
                <h3 className='capitalize font-medium'>{title}</h3>
                {/* COMPANY */}
                <h4 className='capitalize text-sm mt-2'>{company}</h4>
                {/* COLOR */}
                <p className='mt-2 text-sm capitalize flex items-center gap-x-2'>
                    color:
                    <span className='badge badge-sm' style={{ backgroundColor: productColor }}></span>
                </p>
            </div>
            <div className='sm:ml-12'>
                {/* AMOUNT */}
                <div className='form-control max-w-xs'>
                    <label htmlFor="amount" className='label p-0'>
                        <span className='label-text text-white'>Amount</span>
                    </label>
                    <select name="amount" id="amount" className='mt-2 select select-base select-bordered select-xs' value={amount} onChange={handleAmount}>
                        {generateAmountOptions(amount + 5)}
                    </select>
                </div>
                {/* REMOVE */}
                <button className='mt-2 link link-hover link-primary text-xs' onClick={removeItemHandler}>remove item from cart</button>
            </div>
            {/* PRICE */}
            <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
        </article>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        cartID: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        amount: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        productColor: PropTypes.string.isRequired
    }).isRequired
}

export default CartItem