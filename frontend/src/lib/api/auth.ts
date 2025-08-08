// lib/api/auth.ts
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api'; // Update if different

export const registerUser = async (formData: { username: string; password: string }) => {
  return await axios.post(`${BASE_URL}/users/register/`, formData);
};

export const loginUser = async (credentials: { username: string; password: string }) => {
  return await axios.post(`${BASE_URL}/token/`, credentials);
};
