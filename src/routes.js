import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import DarkMode from './components/DarkMode';
import { history } from './helpers/history';

import Home from './pages/Home';

const Routing = () => {
  return (
    <BrowserRouter history={history} basename='/'>

      <Routes>
        <Route
          path='/'
          element={<Home />}
        >
    
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default Routing;