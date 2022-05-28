import { useQuery, useQueryClient } from 'react-query';

const usePosts = () => {
  const fetchPosts = () =>
    fetch(`${process.env.REACT_APP_API_URL}/posts?_expand=user`).then(
      response => response.json()
    );
  const queryClient = useQueryClient();
  const query = useQuery(['posts'], fetchPosts, {
    initialData: () => queryClient.getQueryData('posts'),
  });

  return query;
};

export default usePosts;
