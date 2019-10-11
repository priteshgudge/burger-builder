import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-complete-guide-bur-cdac2.firebaseio.com/"
})

export default instance;
