import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FlightsPage from './features/flights/FlightsPage';
import FlightDetails from './features/flights/components/FlightDetails';
import EditFlightDetails from './features/flights/components/EditFlightDetails';
import {Navbar} from './app/Navbar'
import React from "react";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => (
            <React.Fragment>
              <FlightsPage/>
            </React.Fragment>
          )}/>
          <Route exact path="/flights/:flightId" component={FlightDetails} />
          <Route exact path="/editFlight/:flightId" component={EditFlightDetails} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
