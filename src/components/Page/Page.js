import { Container } from '@chakra-ui/react';

const Page = ({ module, ...rest }) => {
  return (
    <Container maxW={'4xl'} {...rest}>
      {module}
    </Container>
  );
};

export default Page;
