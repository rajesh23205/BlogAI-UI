import api from './axios';
import type { PostsResponse } from '../types/post';
const API_URL = 'http://localhost:5000/api/posts';

 
export const getPosts = async (): Promise<PostsResponse> => {
    const response = await api.get(`${API_URL}`);
    return response.data;
  };

export const createPost = async (data: {
    title: string;
    content: string;
  }) => {
    const res = await api.post(`${API_URL}`, data);
    return res.data;
  };