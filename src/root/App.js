// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { hot } from 'react-hot-loader';

// Components
import News from 'pages/news/News';

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
      <Route exact path="/" component={News} />
      <Route exact path="/new" component={News} />
    </Switch>
  </ThemeProvider>
);

export default hot(module)(App);
