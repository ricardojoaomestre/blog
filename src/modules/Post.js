import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePost from '../hooks/usePost';
import { Heading, Button, HStack, Text, Box, Divider } from '@chakra-ui/react';
import { HiArrowSmLeft } from 'react-icons/hi';
import Avatar from '../components/Avatar';
import UserLink from '../components/UserLink';
import Comments from './Comments';

const Post = () => {
  const { postId } = useParams();
  const { data } = usePost(postId);
  const navigate = useNavigate();
  if (!data) return null;

  const { title, body, user } = data;

  return (
    <Box mb={8}>
      <Button variant="link" onClick={() => navigate(-1)}>
        <HStack spacing={2} mb={4}>
          <HiArrowSmLeft />
          <Text>Back to Posts</Text>
        </HStack>
      </Button>
      <Divider mt={4} mb={6} />
      <HStack spacing={4} mb={4}>
        <Avatar username={user.name} />
        <UserLink user={user} />
      </HStack>
      <Heading as="h1">{title}</Heading>
      <Text as="p" mt={4}>
        {body}
      </Text>
      <Divider my={4} />
      <Comments postId={postId} />
    </Box>
  );
};

export default Post;
