import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

const useFetchArray = (url) => {
  const { data, error } = useSWRImmutable(url);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

// posts
export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const usePostsByUserId = (id) => {
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};

// users
export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

// comments
export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const useCommentsByPostId = (id) => {
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};
