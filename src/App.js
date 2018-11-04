import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VerificationFlow from "./containers/VerificationFlow/VerificationFlow";
import HomePage from "./containers/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import WifLoader from "./components/WifLoader/WifLoader";
import Lookup from "./containers/Lookup/Lookup";
import Requests from "./containers/Requests/Requests";
import Timeline from "./containers/Timeline/Timeline";
import GetVerified from "./containers/GetVerified/GetVerified";
import {NotificationContainer} from 'react-notifications';
import {getFromLS, saveToLS} from "./utils/client";
import {geolocated} from 'react-geolocated';

import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{flexDirection: 'column', height: '100vh'}}>
          <NotificationContainer/>
          <NavBar />
          <Router>
            <div className="container-fluid main-container">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/verify" component={VerificationFlow} />
              <Route exact path="/timeline" component={Timeline} />
              <Route exact path="/lookup" component={Lookup} />
              <Route exact path="/get-verified" component={GetVerified} />
              <Route exact path="/requests" render={props => <Requests {...props} coords={this.props.coords}  />} />
              <Route exact path="/wif-loader" render={props => <WifLoader wif={getFromLS('userWif','value')}  />} />
              <Route exact path="/my-code" render={props => <WifLoader wif={getFromLS('userWif','value')}  />} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
