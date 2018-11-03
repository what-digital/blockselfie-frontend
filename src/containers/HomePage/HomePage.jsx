// import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import ToDoListItem from "../../components/ToDoListItem";

export default class HomePage extends Component {
  state = {
    // addFormVisible: false,
    // addFormValue: ""
  };

  componentWillMount() {
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

// const mapStateToProps = ({ data }) => {
//   return {
//     data
//   };
// };
//
// export default connect(mapStateToProps, actions)(HomePage);
