// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

// Components
import HomeView from 'pages/home/HomeView';

// Styles
import './globalStyles';

const theme = {
  body: 'onyx',
  heading: 'black',
  caption: 'darkGrey',
  footer: 'blue',
  background: '#fff',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/home" component={HomeView} />
    </Switch>
  </ThemeProvider>
);

export default hot(module)(App);
