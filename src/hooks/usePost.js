import { useQuery } from 'react-query';

const usePost = postId => {
  const fetchPost = () =>
    fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}`).then(response =>
      response.json()
    );

  const query = useQuery(['posts', postId], fetchPost);

  return query;
};

export default usePost;
