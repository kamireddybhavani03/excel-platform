import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your backend base URL

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data; // { user, token }
};
