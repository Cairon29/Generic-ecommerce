import axios from 'axios';

const productsURL = 'http://localhost:3001/products';

export const getProducts = () => {
    return axios.get(productsURL).then(response => response.data);
};