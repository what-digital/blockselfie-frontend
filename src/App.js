import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ToDoList from "./containers/ToDoList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div className="container">
            <Route exact path="/" component={ToDoList} />
            <Route exact path="/new" component={null} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
