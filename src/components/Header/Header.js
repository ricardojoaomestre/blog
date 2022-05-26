import { Flex, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import GlobalLoader from '../GlobalLoader';

const Header = ({ ...rest }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="nowrap"
      w="100%"
      mb={8}
      p={{ base: 4, md: 8 }}
      bg={'white'}
      color={'primary.100'}
      borderBottom="1px solid"
      borderColor={'gray.400'}
      position="fixed"
      top={0}
      {...rest}
    >
      <Link to="/">
        <Text
          fontSize="xl"
          fontWeight={'extrabold'}
        >{`\{JSON\} Placeholder Blog`}</Text>
      </Link>
      <GlobalLoader />
    </Flex>
  );
};

export default Header;
