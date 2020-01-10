import React from 'react';
import { useRoutes } from 'hookrouter';
import "./stylesheets/main.scss";
import Home from './pages/Home/Home';
import News from './pages/News/News';

const localStorageCheck = localStorage.getItem("languagesChosen") ? true : false

const routes = {
  "/": () => localStorageCheck ? <News /> : <Home />,
  "/news": () => <News />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <>
      <main data-testid='appContainer'>
        {routeResult}
      </main>
      <footer>
        <p>
          This is app was built with <span aria-label="love" role="img">♥️</span> by <a href="https://github.com/MiaLearnsToCode" rel="noopener noreferrer" target="_blank">Mia</a> and powered by <a href="https://newsapi.org/" rel="noopener noreferrer" target="_blank">News API</a>.
        </p>
      </footer>
    </>
  );
};

export default App;
