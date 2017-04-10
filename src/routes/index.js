import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Layout from '../containers/Layout';
import Game from '../containers/Game';
import ConfigGame from '../containers/ConfigGame';
import Menu from '../containers/Menu';

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route 
        exact 
        path="/"
        component={Menu}
      />
      <Route 
        exact
        path="/config"
        component={ConfigGame}
      />
      <Route 
        exact
        path="/game/:action"
        component={Game}
      />
    </Layout>
  </BrowserRouter>
);

export default Routes;