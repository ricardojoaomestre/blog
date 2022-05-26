import { Spinner } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';
const GlobalLoader = () => {
  const isFetching = useIsFetching();
  const opacity = isFetching ? 1 : 0;

  return <Spinner opacity={opacity} />;
};

export default GlobalLoader;
