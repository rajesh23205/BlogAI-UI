import { useMutation } from '@tanstack/react-query';
import { getAiPost } from '../api/aiPostApi';

export const useGetAiPost = () => {
    return useMutation({
      mutationFn: (title: string) => getAiPost(title),
    });
  };