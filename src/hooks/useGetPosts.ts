import { useQuery } from '@tanstack/react-query';
import { getPosts } from '../api/postAPI';

export const useGetPost = () => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
    retry: false,
  });
};