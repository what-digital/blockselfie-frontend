import "../../App.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions/firebase";
import QrReader from "react-qr-reader";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";
import {getFromLS, saveToLS, parseTimestamp, parseDate} from "../../utils/client";


var FontAwesome = require('react-fontawesome');

const addressLength = 32;

class Timeline extends Component {
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

  componentWillMount() {
    this.props.fetchImages();
  }

  renderRow(image) {
    return (
      image.base64 && <div className="table-row bordered mb-4">
        <div className="wrapper">
          <div className="">
            <img src={image.base64} style={{width: '200px'}} className="mb-2"/>
            <p>{parseTimestamp(image.timestamp)}</p>
            <p>Location: {image.latitude + ' ' + image.longitude}</p>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.history', nextProps.history.location.search);
  }

  goToStep2 = (image) => {
    this.setState({step: 2, imageSrc: image});

    this.props.history.push({
      search: '?step=2',
    })
  }

  renderSteps(step) {
    if (step === 0) {
      return (
        <div className="content col-12">
          <h2 className="mb-2">Your Timeline</h2>
          {this.props.data && Object.keys(this.props.data).map((key, idx) => {
            return this.renderRow(this.props.data[key])
          })
            }
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

export default connect(mapStateToProps, actions)(Timeline);
