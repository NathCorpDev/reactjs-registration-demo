import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation } from 'react-router-dom';

import './App.css';

import Nav from 'components/Nav';
import Login from 'components/Login';
import Register from 'components/Register'
import Home from 'components/Home';
import Charts from 'components/Charts';

function App() {
  const [user, setUser] = useState(false);

  const handleLogin = e => {
    e.preventDefault();
    setUser(true);
  }

  return (
    <Router>
      <Nav />
      <div className="container pt-4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/charts" component={Charts} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
