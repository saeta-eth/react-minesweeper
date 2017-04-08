import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../containers/Layout';
import Game from '../containers/Game';
import Config from '../containers/Config'

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Config} />
      <Route exact path="/game" component={Game} />
    </Layout>
  </BrowserRouter>
);

export default Routes;