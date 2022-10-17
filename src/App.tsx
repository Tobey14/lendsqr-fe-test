import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './Dashboard';
import Login from './Login';
import Details from './Details';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        <Route exact path="/user/:id">
          <Details />
        </Route>

      </Switch>
    </Router>
    
  );
}

export default App;
