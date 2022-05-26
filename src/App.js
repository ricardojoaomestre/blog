// import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout';
import Posts from './modules/Posts';
import Welcome from './modules/Welcome';
import Post from './modules/Post';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Page from './components/Page';
const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Page module={<Welcome />} />} />
            <Route path="/posts" element={<Page module={<Posts />} />} />
            <Route path="post/:postId" element={<Page module={<Post />} />} />
          </Routes>
        </DefaultLayout>
      </QueryClientProvider>
    </BrowserRouter>
    // <ChakraProvider theme={theme}>{/* <ColorModeSwitcher /> */}</ChakraProvider>
  );
};

export default App;
