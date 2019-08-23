import axios from 'axios';
const BASE_URL = 'https://api.github.com';

export {getUserData}

function getUserData(userName) {
  return axios.get(`${BASE_URL}/users/${userName}`);
}