import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-neutral py-2 text-neutral-content">
            <div className='align-element flex justify-center sm:justify-end '>
                {/* USER */}

                {/* LINKS */}
                <div className="flex gap-x-6 justify-center sm:justify-end">
                    <Link to="/login" className="link link-hover text-xs sm:text-sm">
                        Login / Guest
                    </Link>
                    <Link to="/register" className="link link-hover text-xs sm:text-sm">
                        Register
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header