import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


import Header from './components/Header.js';
import Shelters from './components/Shelters.js';
import Clinics from './components/Clinics.js';
import Parks from './components/Parks.js';
import Footer from './components/Footer.js';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Router>
        <div>
          <ul className = "Navbar">
            <li>
              <Link to="/shelters">Animal Shelters</Link>
            </li>
            <li>
              <Link to="/clinics">Animal Clinics</Link>
            </li>
            <li>
              <Link to="/parks">Dog Parks/Playgrounds</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/shelters">
              <Shelters />
            </Route>
            <Route path="/clinics">
              <Clinics />
            </Route>
            <Route path="/parks">
              <Parks />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;
