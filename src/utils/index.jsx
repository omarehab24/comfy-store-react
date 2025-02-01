import axios from "axios";

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
    baseURL: productionUrl
})

export const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format((price / 100).toFixed(2))
}

export const generateAmountOptions = (amount) => {
    // Array.from() takes an array-like or iterable object.
    // An "array-like" object is any object that has a length property and indexed elements. The length property is crucial because it's a fundamental characteristic of arrays in JavaScript.
    // { length: amount }
    // We're creating the minimum requirement for an array-like object. Even though it doesn't have any indexed elements, JavaScript can use the length property to know how many times to run the mapping function.
    // The following approaches work:   
    //      [...Array(amount)]
    //      Array(amount).fill()
    // (_, index) the first parameter is the value, which is not needed in this case.
    return Array.from({ length: amount }, (_, index) => {
        const amount = index + 1;
        return <option key={amount} value={amount}>
            {amount}
        </option>
    })
}