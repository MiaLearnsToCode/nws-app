import React from 'react';
import { useRoutes } from 'hookrouter';
import { ThemeProvider } from 'styled-components';

// styled components
import GlobalStyle from './components/styled-components/GlobalStyle';
import Wrapper from './components/styled-components/Wrapper';
import Footer from './components/styled-components/Footer';

// other components
import Home from './pages/Home/Home';
import News from './pages/News/News';

const localStorageCheck = localStorage.getItem('languagesChosen') ? true : false ;

const routes = {
  '/': () => localStorageCheck ? <News /> : <Home />,
  '/preferences': () => <Home />,
  '/news': () => <News />
};

const themeLight = {
  text: '#696969',
  backGround: '#faf8f86e'
};

const themeDark = {
  text: '#e8e8e8',
  backGround: '#13141e'
};

const currentTime = new Date();
const hours = currentTime.getUTCHours();

const timeCheck = hours > 16 || hours < 8 ? themeDark : themeLight ;

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <ThemeProvider theme={timeCheck}>
      <GlobalStyle />
      <Wrapper>
        <main data-testid='appContainer'>
          {routeResult}
        </main>
        <Footer>
          <p>
            This is app was built with <span aria-label='love' role='img'>♥️</span> by <a href='https://github.com/MiaLearnsToCode' rel='noopener noreferrer' target='_blank'>Mia</a> and powered by <a href='https://newsapi.org/' rel='noopener noreferrer' target='_blank'>News API</a>.
          </p>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
