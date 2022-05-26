import { Container, Box, Heading, Text } from '@chakra-ui/react';
import usePosts from '../hooks/usePosts';
import { Link } from 'react-router-dom';

const PostPreview = ({ id, title, body }) => {
  return (
    <Box mb={8}>
      <Heading as="h2">
        <Link to={`/post/${id}`}>{title}</Link>
      </Heading>
      <Text as="p" mt={4}>
        {body}
      </Text>
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
