import api from './axios';
import type { PostsResponse } from '../types/post';
const API_URL = 'http://localhost:5000/api/posts';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPosts = async (): Promise<PostsResponse> => {
    const response = await api.get(`${API_URL}`);
    return response.data;
  };