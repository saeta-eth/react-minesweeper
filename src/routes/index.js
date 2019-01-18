import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Game from '../containers/Game';
import ConfigGame from '../containers/ConfigGame';
import Menu from '../containers/Menu';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route exact path="/config" component={ConfigGame} />
      <Route exact path="/game" component={Game} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
