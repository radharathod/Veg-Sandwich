
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-vag-sandwich.firebaseio.com/ '
});

export default instance;