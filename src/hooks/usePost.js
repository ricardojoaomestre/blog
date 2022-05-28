import { useQueryClient, useQuery } from 'react-query';

const usePost = postId => {
  const fetchPost = postId =>
    fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}?_expand=user`).then(
      response => response.json()
    );
  const queryClient = useQueryClient();
  const query = useQuery(['posts', postId], () => fetchPost(postId), {
    initialData: () =>
      queryClient
        .getQueryData('posts')
        ?.find(post => post.id === parseInt(postId)),
  });

  return query;
};

export default usePost;
