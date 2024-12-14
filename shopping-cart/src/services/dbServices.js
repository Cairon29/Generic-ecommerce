import axios from 'axios';
const baseUrl = 'http://localhost:3001/products'

export const getLostItems = () => {
    const request = axios.get(baseUrl)
    return request.then(response => (response.data))
}
