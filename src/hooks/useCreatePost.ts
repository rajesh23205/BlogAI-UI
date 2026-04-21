import { useMutation } from "@tanstack/react-query";
import { createPost } from "../api/postAPI";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPost,
  });
};