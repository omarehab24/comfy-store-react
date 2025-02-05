import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice'

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userState.user);

    const handleLogout = () => {
        navigate('/');
        dispatch(logout());
        dispatch(clearCart());
    }

    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className='align-element flex justify-center sm:justify-end '>
                {user ? (
                    <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                        <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
                        <button className='btn btn-xs btn-primary btn-outline' onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                ) : (
                    < div className="flex gap-x-6 justify-center sm:justify-end">
                        <Link to="/login" className="link link-hover text-xs sm:text-sm">
                            Login / Guest
                        </Link>
                        <Link to="/register" className="link link-hover text-xs sm:text-sm">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </header >
    )
}

export default Header