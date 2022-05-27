import { Container, Box, Heading, Text, HStack } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import { Link } from 'react-router-dom';
import UserLink from '../components/UserLink';

const PostPreview = ({ id, title, body, user }) => {
  return (
    <Box mb={8}>
      <Heading as="h2">
        <Link to={`/post/${id}`}>{title}</Link>
      </Heading>
      <Text as="p" mt={4} textAlign="justify">
        {body}
      </Text>
      <HStack mt={2} textAlign="right" justify="flex-end" color={'gray.500'}>
        <Text as="span">by</Text>
        <UserLink user={user} />
      </HStack>
    </Box>
  );
};

const Posts = () => {
  const { data } = usePosts();

  return (
    <Container maxW={'4xl'}>
      {data?.map(post => (
        <PostPreview key={`post_${post.id}`} {...post} />
      ))}
    </Container>
  );
};

export default Posts;
