import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '../hooks/usePost';
import { Heading, HStack, Text, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
const Post = () => {
  const { postId } = useParams();
  const { data } = usePost(postId);

  const { title, body } = { ...data };

  if (!data) return null;

  return (
    <Box mb={8}>
      <Link to="/posts">
        <HStack spacing={2} mb={4}>
          <HiArrowSmLeft />
          <Text>Back to Posts</Text>
        </HStack>
      </Link>
      <Heading as="h1">{title}</Heading>
      <Text as="p" mt={4}>
        {body}
      </Text>
    </Box>
  );
};

export default Post;
