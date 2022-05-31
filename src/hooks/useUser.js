import { useQuery, useQueryClient } from 'react-query';

const useUser = userId => {
  const fetchPost = () =>
    fetch(`${process.env.REACT_APP_API_URL}/users/${userId}`).then(response =>
      response.json()
    );
  const queryClient = useQueryClient();
  const query = useQuery(['users', userId], fetchPost, {
    initialData: () => queryClient.getQueryData(['users', userId]),
  });

  return query;
};

export default useUser;
