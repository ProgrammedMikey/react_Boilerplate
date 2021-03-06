import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';

export default (
  <Route component={App}>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/logout' component={Logout} />
  </Route>
);