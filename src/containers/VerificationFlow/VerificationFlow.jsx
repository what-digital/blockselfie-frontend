// import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import ToDoListItem from "../../components/ToDoListItem";

class VerificationFlow extends Component {
  state = {
    step: 0,
  };

  componentWillMount() {
    // this.props.fetchToDos();
  }

  render() {
    const { step } = this.state;
    return (
      <div className="content">
        {step}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(VerificationFlow);
