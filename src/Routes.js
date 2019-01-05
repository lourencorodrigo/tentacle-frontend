import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './views/Login';
import Logout from './views/Logout';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={() => <h1>Home</h1>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
