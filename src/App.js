import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Feedback from './pages/Feedback/Feedback';
import Game from './pages/Game/Game';
import Login from './pages/Login/Login';
import Ranking from './pages/Ranking/Ranking';
import Settings from './pages/Settings/Settings';
import Notfound from './pages/NotFound.js/Notfound';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  font-family: 'Open Sans', sans-serif;
}
`;

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
        <Route path="*" component={ Notfound } />
      </Switch>
    </div>
  );
}
