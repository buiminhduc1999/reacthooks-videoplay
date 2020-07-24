import axios from 'axios';
const BASE_URL = process.env.REACT_APP_URL_API_PHOTOS;

export default {
    getAllPhotos: () =>
        axios.get(`${BASE_URL}/photos`),
    addPhoto: (photo) =>
        axios.post(`${BASE_URL}/photos`, photo),
    editPhoto: (photoId) =>
        axios.get(`${BASE_URL}/photos/${photoId}`),
    updatePhoto: (photo) =>
        axios.put(`${BASE_URL}/photos/${photo.id}`, photo),
    deletePhoto: (photoId) =>
        axios.delete(`${BASE_URL}/photos/${photoId}`),
    addUser: (user) =>
        axios.post(process.env.REACT_APP_URL_API_USERS, user),
    getUserById: () =>
        axios.get(process.env.REACT_APP_URL_API_USERS),
    getUserAC: () =>
        axios.get(`https://milky-gateway.herokuapp.com/api/v1/login`),
}