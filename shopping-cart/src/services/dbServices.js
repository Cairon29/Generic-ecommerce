import axios from 'axios';

const productsURL = 'http://localhost:3001/products';
const usersURL = "http://localhost:3002/users"

export const getProducts = () => {
    return axios.get(productsURL).then(response => response.data);
};

export const getUsers = () => {
    return axios.get(usersURL).then(response => response.data);
}