import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';

import * as serviceWorker from './serviceWorker';
import GlobalStyle from './global-style';
import configureStore from './store/configure';
import Routes from './routes';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Normalize />
    <GlobalStyle />
    <Routes />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
