import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { history } from './helpers/history';

import Home from './pages/Home';
import Search from './pages/Search';
import Buttons from './pages/Buttons';

const Routing = () => {
  return (
    <BrowserRouter history={history} basename='/'>

      <Routes>
        <Route
          path='/'
          element={<Home />}
        >

        </Route>
        <Route
          path='/search'
          element={<Search />}
        >

        </Route>
        <Route
          path='/buttons'
          element={<Buttons />}
        >

        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default Routing;