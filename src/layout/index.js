import { Flex, Box } from '@chakra-ui/react';
import Header from '../components/Header';
const DefaultLayout = ({ children, ...rest }) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: '1200px' }}
      m="0 auto"
      {...rest}
    >
      <Header />
      <Box mt={{ base: 24, md: 32 }}>{children}</Box>
    </Flex>
  );
};

export default DefaultLayout;
