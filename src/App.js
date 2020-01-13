import React from 'react';
import { useRoutes } from 'hookrouter';
import { ThemeProvider } from 'styled-components';

// styled components
import GlobalStyle from './components/styled-components/GlobalStyle'
import Wrapper from './components/styled-components/Wrapper'
import Footer from './components/styled-components/Footer'

// other components
import Home from './pages/Home/Home';
import News from './pages/News/News';


const localStorageCheck = localStorage.getItem("languagesChosen") ? true : false

const routes = {
  "/": () => localStorageCheck ? <News /> : <Home />,
  "/news": () => <News />
};

const theme = {
  green: 'green'
}

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <main data-testid='appContainer'>
          {routeResult}
        </main>
        <Footer>
          <p>
            This is app was built with <span aria-label="love" role="img">♥️</span> by <a href="https://github.com/MiaLearnsToCode" rel="noopener noreferrer" target="_blank">Mia</a> and powered by <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank">News API</a>.
          </p>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
