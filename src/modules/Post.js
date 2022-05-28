import React from 'react';
import { useParams } from 'react-router-dom';
import usePost from '../hooks/usePost';
import { Heading, HStack, Text, Box, Divider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiArrowSmLeft } from 'react-icons/hi';
import Avatar from '../components/Avatar';
import UserLink from '../components/UserLink';
import Comments from './Comments';

const Post = () => {
  const { postId } = useParams();
  const { data } = usePost(postId);

  const { title, body, user } = { ...data };

  if (!data) return null;

  return (
    <Box mb={8}>
      <Link to={`/posts#post${postId}`}>
        <HStack spacing={2} mb={4}>
          <HiArrowSmLeft />
          <Text>Back to Posts</Text>
        </HStack>
      </Link>
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
