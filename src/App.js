// import { ChakraProvider, theme } from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './modules/Posts';
import Welcome from './modules/Welcome';
import Post from './modules/Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
    // <ChakraProvider theme={theme}>{/* <ColorModeSwitcher /> */}</ChakraProvider>
  );
};

export default App;
