import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'https://localhost:5001',
    headers: {
        headerType: 'example header type'
    }
});
 
export default instance;