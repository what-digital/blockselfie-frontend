import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ToDoList from "./containers/ToDoList/ToDoList";
import VerificationFlow from "./containers/VerificationFlow/VerificationFlow";
import HomePage from "./containers/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import WifLoader from "./components/WifLoader/WifLoader";
import Lookup from "./containers/Lookup/Lookup";
import Requests from "./containers/Requests/Requests";
import GetVerified from "./containers/GetVerified/GetVerified";
import {NotificationContainer} from 'react-notifications';
import {getFromLS, saveToLS} from "./utils/client";

import 'react-notifications/lib/notifications.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{flexDirection: 'column', height: '100vh'}}>
          <NotificationContainer/>
          <NavBar />
          <Router>
            <div className="container main-container">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/todo" component={ToDoList} />
              <Route exact path="/verify" component={VerificationFlow} />
              <Route exact path="/lookup" component={Lookup} />
              <Route exact path="/get-verified" component={GetVerified} />
              <Route exact path="/requests" component={Requests} />
              <Route exact path="/wif-loader" render={props => <WifLoader wif={getFromLS('user','wif')}  />} />
              <Route exact path="/my-code" render={props => <WifLoader wif={getFromLS('user','wif')}  />} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
