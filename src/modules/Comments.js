import useComments from '../hooks/useComments';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';

const Comment = ({ name, body, email }) => (
  <Box my={4}>
    <Heading as="h2" fontSize={'2xl'} mb={2}>
      {name}
    </Heading>
    <Text>{body}</Text>
  </Box>
);

const Comments = ({ postId, ...rest }) => {
  const { data } = useComments(postId);

  if (!data) return null;

  return (
    <Box>
      <Text fontWeight="semibold">{data.length} comments</Text>
      <VStack spacing={4} {...rest}>
        {data?.map(comment => (
          <Comment
            key={`comment_${comment.postId}-${comment.id}`}
            {...comment}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Comments;
