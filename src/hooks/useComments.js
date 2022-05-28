import { useQuery, useQueryClient } from 'react-query';

const usePost = postId => {
  const fetchPost = () =>
    fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`).then(
      response => response.json()
    );
  const queryClient = useQueryClient();
  const query = useQuery(['posts', postId, 'comments'], fetchPost, {
    initialData: () => queryClient.getQueryData(['posts', postId, 'comments']),
  });

  return query;
};

export default usePost;
