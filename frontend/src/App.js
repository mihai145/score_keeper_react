import React from 'react';
import Navbar from './components/Navbar';
import AllMatches from './components/AllMatches';
import AddTeam from './components/AddTeam';
import AddMatch from './components/AddMatch';
import EditMatch from './components/EditMatch';

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

          <Route path="/editMatch/:matchId">
            <EditMatch />
          </Route>

      </Switch>

    </Router>
  );
}

export default App;
