import axios from 'axios';

const baseUrl = 'http://localhost:3001/products';

export const getProducts = () => {
    return axios.get(baseUrl).then(response => response.data);
};
