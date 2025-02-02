import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

function Filters() {
    const { meta } = useLoaderData()
    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput type='search' label='Search Products' name='search' size='input-sm' />
            {/* CATEGORIES */}
            <FormSelect type='select' label='Select Category' name='category' size='select-sm' list={meta.categories} />
            {/* COMPANIES */}
            <FormSelect type='select' label='Select Company' name='company' size='select-sm' list={meta.companies} />
            {/* ORDER */}
            <FormSelect type='select' label='Select Order' name='order' size='select-sm' list={['name-a-z', 'name-z-a', 'price-low-to-high', 'price-high-to-low']} />
            {/* BUTTONS */}
            <button className='btn btn-primary btn-sm' type='submit'>
                Search
            </button>
            <Link to='/products' className='btn btn-accent btn-sm'>
                Reset
            </Link>
        </Form>
    )
}

export default Filters