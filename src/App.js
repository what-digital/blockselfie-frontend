import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ToDoList from "./containers/ToDoList/ToDoList";
import VerificationFlow from "./containers/VerificationFlow/VerificationFlow";
import HomePage from "./containers/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";
import Lookup from "./containers/Lookup/Lookup";
import GetVerified from "./containers/GetVerified/GetVerified";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row" style={{flexDirection: 'column', height: '100vh'}}>
          <NavBar />
          <Router>
            <div className="container main-container">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/todo" component={ToDoList} />
              <Route exact path="/verify" component={VerificationFlow} />
              <Route exact path="/lookup" component={Lookup} />
              <Route exact path="/get-verified" component={GetVerified} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
