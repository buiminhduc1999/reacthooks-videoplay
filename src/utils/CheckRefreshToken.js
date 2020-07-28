import decode from 'jwt-decode';
import { getJwt } from './HandlingJwt';
import axios from 'axios';

axios.defaults.baseURL = localStorage.getItem('domain');

const interceptor = axios.interceptors.response.use(
    response => response,
    error => {
        axios.interceptors.response.eject(interceptor);
        return axios.post('/api/refresh_token', {
            'refresh_token': JSON.parse(localStorage.getItem('token'))['refresh_token']
        }).then(response => {
            /*saveToken();*/
            localStorage.setItem('token', JSON.stringify(response.data));
            error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
            return axios(error.response.config);
        });
    }
);

export const checkRefresh = () => {
    try {
        const exp = decode(getJwt()).exp;
        if (exp < new Date().getTime() / 1000) {
            interceptor();
        }
    } catch (e) {
        return false;
    }
    return true;
}