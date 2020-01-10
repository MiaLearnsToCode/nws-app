import React from 'react';
import { useRoutes } from 'hookrouter';
import "./stylesheets/main.scss";
import Home from './pages/Home/Home';
import News from './pages/News/News';

const routes = {
  "/": () => <Home />,
  "/news": () => <News />
};

const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <main data-testid='appContainer'>
      {routeResult}
    </main>
  );
};

export default App;
