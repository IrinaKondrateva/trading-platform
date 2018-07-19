import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'components/AppRouter';
// import createStore from 'store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

// const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
  document.getElementById('root')
);
