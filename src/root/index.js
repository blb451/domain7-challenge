// Modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Components
import App from './App';

const appRoot = document.getElementById('app');

export default () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot,
  );
};
