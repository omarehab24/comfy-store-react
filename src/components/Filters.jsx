import { Form, useLoaderData, Link } from 'react-router-dom';
import FormInput from './FormInput';

function Filters() {
    return (
        <Form className='bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
            {/* SEARCH */}
            <FormInput type='search' label='Search Products' name='search' size='input-sm' />
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