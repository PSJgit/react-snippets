import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Async from './components/Async/Async';
import Location from './components/Location/Location';
import './index.css';

export default function App() {
 
  return (
    <Router>

      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/async">Async</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/async">
          <Async />
        </Route>
        <Route path="/location">
          <Location />
        </Route>
        <Route path="/">
          <div>home</div>
        </Route>
      </Switch>

    </Router>
  )
}

