// import "./ToDoList.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";

class GetVerified extends Component {
  state = {
    step: 0,
  };

  componentWillMount() {
    // this.props.fetchToDos();
  }

  submitWif = (e) => {
    e.preventDefault();
    console.log("submit wif", e.currentTarget[0].value, e.target[0].value);
    const { sendWif } = this.props;
    sendWif({'wif': e.currentTarget[0].value});
  }

  render() {
    const { step } = this.state;
    return (
      <div className="content">
      <form onSubmit={(e) => this.submitWif(e)}>
         <FormGroup>
           <Label for="wif">WIF</Label>
           <Input type="text" name="WIF" id="wif" placeholder="WIF" />
         </FormGroup>
         <Button>Submit</Button>
       </form>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(GetVerified);
