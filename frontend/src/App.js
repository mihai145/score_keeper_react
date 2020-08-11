import React from 'react';
import Navbar from './components/Navbar';
import AllMatches from './components/AllMatches';
import AddTeam from './components/AddTeam';
import AddMatch from './components/AddMatch';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        
          <Route exact path="/">
            <AllMatches />
          </Route>

          <Route exact path="/addTeam">
            <AddTeam />
          </Route>

          <Route exact path="/addMatch">
            <AddMatch />
          </Route>

      </Switch>

    </Router>
  );
}

export default App;
