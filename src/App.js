import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import logo from './trivia.png';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Login from './pages/Login';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

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
      </Switch>
    </div>
  );
}

/* <header className="App-header">
  <img src={ logo } className="App-logo" alt="logo" />
  <p>SUA VEZ</p>
</header> */
