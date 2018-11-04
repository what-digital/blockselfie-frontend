// import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
// import * as actions from "../../actions";
import ToDoListItem from "../../components/ToDoListItem";
import { getName } from "../../actions/neo/index";

class HomePage extends Component {
  state = {
    // addFormVisible: false,
    // addFormValue: ""
  };

  componentWillMount() {
    getName();
    console.log('WAT?')
    // this.props.fetchToDos();
  }

  render() {
    return (
      <div className="to-do-list-container text-center">
        Block chain verified identities
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, {getName})(HomePage);
