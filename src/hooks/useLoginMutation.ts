import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      localStorage.setItem('token', data.token);

      navigate('/');
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error('Login failed:', error.response?.data?.message);
    },
  });
};