import { useQuery } from 'react-query';

const usePosts = () => {
  const fetchPosts = () =>
    fetch(`${process.env.REACT_APP_API_URL}/posts?_expand=user`).then(
      response => response.json()
    );

  const query = useQuery(['posts'], fetchPosts);

  return query;
};

export default usePosts;
