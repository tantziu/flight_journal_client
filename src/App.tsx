import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import FlightsPage from './features/flights/FlightsPage';
import FlightDetails from './features/flights/components/FlightDetails';
import EditFlightDetails from './features/flights/components/EditFlightDetails';
import React from "react";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
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
    </Router>
    
  );
}

export default App;
