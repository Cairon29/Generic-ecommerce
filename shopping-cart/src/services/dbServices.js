import axios from 'axios';

const productsURL = 'http://localhost:3001/products';
const categoriesURL = 'http://localhost:3001/categories';

export const getProducts = () => {
    return axios.get(productsURL).then(response => response.data);
};

export const getCategories = () => {
    return axios.get(categoriesURL).then(response => response.data);
};