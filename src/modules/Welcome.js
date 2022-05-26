import React from 'react';
import {
  Container,
  Center,
  VStack,
  Button,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <Container maxW={'3xl'}>
      <Flex
        w="full"
        align={'center'}
        justify={{ base: 'flex-start', md: 'center' }}
        h="70vh"
      >
        <Center>
          <VStack textAlign={{ base: 'center' }}>
            <Heading as="h1">{`\{JSON\} Placeholder Blog`}</Heading>
            <Text mt={4}>A blog using JSON Placeholder API</Text>
            <Link to="/posts">
              <Button mt={8}>Check Posts</Button>
            </Link>
          </VStack>
        </Center>
      </Flex>
    </Container>
  );
};

export default Welcome;
