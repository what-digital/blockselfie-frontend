import "../../App.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import QrReader from "react-qr-reader";
var FontAwesome = require('react-fontawesome');

const addressLength = 32;

class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      wif: "",
      scannerResult: "",
      step: 0,
      scanner: false,
    };
  }

  handleScan = (data) => {
    console.log("handleScan");
    if (data) {
      this.setState({
        scannerResult: data,
        scanner: false
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

  renderRow() {
    return (
      <div className="table-row bordered">
        <div className="wrapper">
          <div className="wrapper ">
            <div className="wide">
              Request
            </div>
          </div>
        </div>
        <div className="wrapper group">
          <div className="group grey">
            Address
          </div>
        </div>
        <div className="wrappe">
          <div className="group">
            Action
          </div>
        </div>

      </div>
    )
  }

  render() {
    const { step } = this.state;
    return (
      <div className="content">
        Incoming Verification Requests
        {this.renderRow()}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Requests);
