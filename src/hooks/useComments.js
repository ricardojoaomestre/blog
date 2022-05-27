import { useQuery } from 'react-query';

const usePost = postId => {
  const fetchPost = () =>
    fetch(`${process.env.REACT_APP_API_URL}/posts/${postId}/comments`).then(
      response => response.json()
    );

  const query = useQuery(['posts', postId, 'comments'], fetchPost);

  return query;
};

export default usePost;
