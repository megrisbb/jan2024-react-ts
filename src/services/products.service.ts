import IProducts from "../model/IProducts";

const baseURL = 'https://dummyjson.com/products'
const getProducts = (): Promise<IProducts[]> => {
    return fetch(baseURL)
        .then(value => value.json())
        .then(data => data.products)
}

export {getProducts}