import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import App from './App';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';
import { history, configureStore } from './helpers/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
