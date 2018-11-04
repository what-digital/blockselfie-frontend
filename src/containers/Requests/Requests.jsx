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
      camera: false,
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
            <Button onClick={() => this.setState({step: 1})} outline color="success" type="button">Accept</Button>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.history', nextProps.history.location.search);
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

  goToStep2 = (image) => {
    this.setState({step: 2, imageSrc: image});

    this.props.history.push({
      search: '?step=2',
    })
  }

  submitHash() {
    console.log('submiImage', this.state.imageSrc);
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
          {!this.state.camera && <Button outline color="success"  onClick={() => this.setState({camera: true})} className="closeButton">Take Selfie</Button>}
          {this.state.camera && <WebcamCapture closeCamera={() => this.setState({camera: false})} photoTaken={(image) => this.goToStep2(image)} />}
        </div>
      )
    } else if (step === 2) {
      return (<div className="content col-12 text-center">
        <h1>
          Complete Verification Process
        </h1>
        <div className="col-12">Image hash:</div>
        <img src={this.state.imageSrc} style={{width: '200px'}}/>
        <Button type="button" onClick={this.submitImage} outline color="success" className="mt-2 d-block mx-auto">Submit</Button>
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
