import api from './axios';

import type { AuthResponse } from '../types/auth';

const API_URL = 'http://localhost:5000/api/auth'; // Replace with your real API URL

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const registerUser = async (formData: any): Promise<AuthResponse> => {
  const response = await api.post(`${API_URL}`, formData);
  return response.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loginUser = async (formData: any): Promise<AuthResponse> => {
  const response = await api.post(`${API_URL}/login`, formData);
  return response.data;
};