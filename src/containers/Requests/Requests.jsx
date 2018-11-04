import "../../App.scss";
import {Button} from 'reactstrap';
import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions/firebase";
import {NotificationManager} from 'react-notifications';
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";


import {wallet} from '@cityofzion/neon-js';

import {getFromLS} from "../../utils/client";

var MD5 = require("crypto-js/md5");
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
      sourceWif: null,
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
    const {sendWif} = this.props;
    sendWif({'wif': e.currentTarget[0].value});
  }

  renderRow(wif) {
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
            {wif}
          </div>
        </div>
        <div className="wrapper">
          <div className="group">
            <Button onClick={() => this.setState({step: 1, sourceWif: wif})} outline color="success"
                    type="button">Accept</Button>
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
    this.setState({step: 2, imageSrc: image, imageHash: MD5(image).toString()});

    this.props.history.push({
      search: '?step=2',
    })
  }

  submitImage = () => {
    const {addImage} = this.props;
    const wif = JSON.parse(localStorage.getItem('userWif')).value;
    const account = new wallet.Account(wif);
    console.log('SHA: ',);
    console.log('renderHeader', this.props.coords && this.props.coords.latitude);
    addImage(this.state.imageHash, this.state.imageSrc, this.props.coords.latitude, this.props.coords.longitude)
      .then((res) => NotificationManager.success('Success message', 'You have been verified'))
      .then(() => {
        fetch('http://sc-be.what.digital/confirm-verification-request', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "wif": account.WIF,
            "source_address": account.address,
            "image_hash": this.state.imageHash,
            "target_address": getFromLS('userAddress', 'value')
          })
        }).then(res => res.json())
          .then(res => console.log(res));
      });
  };

  renderSteps(step) {
    if (step === 0) {

      return (
        <div className="content col-12">
          <h2 className="">
            Incoming Verification Requests
          </h2>
          {this.renderRow('hash1')}
          {this.renderRow('hash2')}
          {this.renderRow('hash3')}
          {this.renderRow('hash4')}
        </div>
      )
    } else if (step === 1) {
      return (
        <div className="content col-12 d-flex justify-content-center">
          {!this.state.camera &&
          <Button outline color="success" onClick={() => this.setState({camera: true})} className="closeButton">Take
            Selfie</Button>}
          {this.state.camera && <WebcamCapture closeCamera={() => this.setState({camera: false})}
                                               photoTaken={(image) => this.goToStep2(image)}/>}
        </div>
      )
    } else if (step === 2) {
      return (<div className="content col-12 text-center d-block">
        <h1>
          Complete Verification Process
        </h1>
        <div className="col-12">Image hash: {this.state.imageHash}</div>
        <img src={this.state.imageSrc} style={{width: '200px'}}/>
        <Button type="button" onClick={this.submitImage} outline color="success"
                className="mt-2 d-block mx-auto">Submit</Button>
      </div>)
    }
  }

  render() {
    const {step} = this.state;
    return (
      this.renderSteps(step)
    );
  }
}

const mapStateToProps = ({data}) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Requests);
