import {
  Center,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Avatar from '../components/Avatar';
import { HiOutlineMail } from 'react-icons/hi';
import useUser from '../hooks/useUser';
import { useParams } from 'react-router-dom';
const User = () => {
  const { userId } = useParams();
  const { data } = useUser(userId);
  const cardTheme = {
    bg: useColorModeValue('white', 'gray.700'),
  };
  if (!data) return null;

  const { name, email, company } = data;

  return (
    <Flex wrap="wrap" gap={6} py={6}>
      <Center>
        <Flex
          direction={'column'}
          maxW={'480px'}
          minW={'320px'}
          w={'full'}
          bg={cardTheme.bg}
          boxShadow={'2xl'}
          textAlign={'center'}
          px={6}
          py={8}
          align={'center'}
          rounded={'md'}
        >
          <Avatar
            username={name}
            mb={6}
            size={'100px'}
            fontWeight={'bold'}
            fontSize="2xl"
          />
          <Heading fontSize={'2xl'} mb={2}>
            {name}
          </Heading>

          <HStack mb={8}>
            <HiOutlineMail />
            <Link href={`mailto:${email}`} fontWeight={'semibold'}>
              {email}
            </Link>
          </HStack>
          <Text fontWeight={'bold'} fontSize="xl">
            {company?.name}
          </Text>
          <Text>{company?.catchPhrase}</Text>
        </Flex>
      </Center>
    </Flex>
  );
};

export default User;
