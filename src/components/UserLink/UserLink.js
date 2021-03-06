import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const UserLink = ({ user, ...rest }) => {
  return (
    <Link to={`/user/${user.id}`} {...rest}>
      <Text>{user.name}</Text>
    </Link>
  );
};

export default UserLink;
