import React from 'react';
import { Route, Router } from 'react-router-dom';

import { history } from './helpers/history';

import Home from './pages/Home';

const Routes = () => {
  return (
    <Router history={history} basename='/'>

        <Route
          path=''
          basename=''
          pathname='home'
          location="/"
          children={Home}
        />

    </Router>
  )
}

export default Routes;