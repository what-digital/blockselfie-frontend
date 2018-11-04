import "../../App.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import QrReader from "react-qr-reader";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";

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
              12-10-2018
            </div>
          </div>
        </div>
        <div className="wrapper group">
          <div className="group grey">
            fdghjkhgfd
          </div>
        </div>
        <div className="wrappe">
          <div className="group">
            <button onClick={() => this.setState({step: 1})}>Accept</button>
          </div>
        </div>
      </div>
    )
  }

  renderHeader() {
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

  renderSteps(step) {
    if (step === 0) {
      return (
        <div className="content col-12">
          Incoming Verification Requests
          {this.renderRow()}
        </div>
      )
    } else if (step === 1) {
      return (
        <div className="content col-12 d-flex justify-content-center">
          <WebcamCapture photoTaken={(image) => {this.setState({step: 2, imageSrc: image})}}/>
        </div>
      )
    } else if (step === 2) {
      return (<div className="content col-12">
        <h1>
          Complete Verification Process
        </h1>
        <div>Image hash:</div>
        <img src={this.state.imageSrc} />
      </div>)
    }
  }

  render() {
    const { step } = this.state;
    return (
      this.renderSteps(step)
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Requests);
