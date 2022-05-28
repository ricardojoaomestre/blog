import { Circle, Text } from '@chakra-ui/react';

const Avatar = ({ username, ...rest }) => {
  let description =
    !username || username.lenght === 0 ? '_' : username.toUpperCase();

  description = description
    .split(' ')
    .map(name => name[0])
    .join('');

  return (
    <Circle size="50px" bg={'green.400'} {...rest}>
      <Text color={'white'}>{description}</Text>
    </Circle>
  );
};

export default Avatar;
