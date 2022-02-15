import axios from 'axios';

const url = "http://localhost:3003/users";

export const getUsers = () => {
    return axios.get(url);
}