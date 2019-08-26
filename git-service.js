import axios from 'axios';
const BASE_URL = 'https://api.github.com';

export {getUserData,getRepoData}

function getUserData(userName) {
  return axios.get(`${BASE_URL}/users/${userName}`);
}
function getRepoData(username) {
   const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axios.get(url);
}