import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // 1. Store the token (AI blog will need this for protected routes)
      localStorage.setItem('token', data.token);
      
      // 2. Redirect to the posts page
      navigate('/');
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error('Signup failed:', error.response?.data?.message);
    }
  });
};