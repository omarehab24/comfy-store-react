import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';


function ProductsContainer() {
    const { meta } = useLoaderData()
    const totalProducts = meta.pagination.total
    const [layout, setLayout] = useState('grid')

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-base-content'}`
    }

    return (
        <>
            {/* HEADER */}
            <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
                <h4 className='font-medium text-md'>
                    {totalProducts} {totalProducts === 1 ? 'product' : 'products'}
                </h4>
                <div className='flex gap-x-2'>
                    <button type='button' onClick={() => setLayout('grid')} className={setActiveStyles('grid')}>
                        <BsFillGridFill />
                    </button>
                    <button type='button' onClick={() => setLayout('list')} className={setActiveStyles('list')}>
                        <BsList />
                    </button>
                </div>
            </div>
            {/* PRODUCTS */}
            {totalProducts === 0 ?
                <h5 className='text-2xl mt-16'> No products found! </h5>
                : layout === 'grid' ? <ProductsGrid /> : <ProductsList />}
        </>
    )
}

export default ProductsContainer