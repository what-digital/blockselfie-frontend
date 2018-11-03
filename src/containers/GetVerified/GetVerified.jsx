// import "./ToDoList.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import QrReader from "react-qr-reader";

class GetVerified extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result",
      step: 0,
    };
  }

  handleScan = (data) => {
    console.log("handleScan");
    if (data) {
      this.setState({
        result: data
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

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
      <form onSubmit={(e) => this.submitWif(e)} style={{textAlign: 'center'}}>
         <FormGroup>
           <Label for="wif">Enter Your WIF</Label>
           <Input type="text" name="WIF" id="wif" placeholder="WIF" />
         </FormGroup>
         <Button>Submit</Button>
       </form>
       <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
        />
        <p>{this.state.result}</p>
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
