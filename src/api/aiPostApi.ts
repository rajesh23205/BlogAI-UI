import api from './axios';
import type { AiBlogPost } from '../types/aiPost';
const API_URL = 'http://localhost:5000/api/ai';

 
export const getAiPost = async (title:string): Promise<AiBlogPost> => {
    const response = await api.get(`${API_URL}/contentSuggestion?title=${title}`);
    return response.data;
  };