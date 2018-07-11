// Modules
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Components
import News from 'pages/news/News';

// Styles
import './globalStyles';

const App = () => (
  <Switch>
    <Route exact path="/" component={News} />
    <Route exact path="/news" component={News} />
  </Switch>
);

export default hot(module)(App);
