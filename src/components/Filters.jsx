import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import FormRange from './FormRange';
import FormCheckbox from './FormCheckbox';

function Filters() {
    const { meta, params } = useLoaderData()
    const { search, category, company, order, price, shipping } = params
    return (
        <Form className='bg-base-300 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput type='search' label='Search Products' name='search' size='input-sm' defaultValue={search} />
            {/* CATEGORIES */}
            <FormSelect type='select' label='Select Category' name='category' size='select-sm' list={meta.categories} defaultValue={category} />
            {/* COMPANIES */}
            <FormSelect type='select' label='Select Company' name='company' size='select-sm' list={meta.companies} defaultValue={company} />
            {/* ORDER */}
            <FormSelect type='select' label='Select Order' name='order' size='select-sm' list={['a-z', 'z-a', 'high', 'low']} defaultValue={order} />
            {/* PRICE */}
            <FormRange label='Select Price' name='price' size='range-sm' price={price} />
            {/* SHIPPING */}
            <FormCheckbox label='free shipping' name='shipping' size='checkbox-sm' defaultValue={shipping} />
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