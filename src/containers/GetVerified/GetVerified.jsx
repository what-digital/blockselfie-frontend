import "../../App.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import {getFromLS, saveToLS} from "../../utils/client";
import WifLoader from "../../components/WifLoader/WifLoader";
var QRCode = require('qrcode.react');

const addressLength = 32;

class GetVerified extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      wif: "",
      step: getFromLS('userWif', 'value') ? 1 : 0,
      scanner: false,
    };
  }


  componentWillMount() {
    // this.props.fetchToDos();
  }

  submitWif = (value) => {
    console.log("submit wif", value);
    const { sendWif } = this.props;
    sendWif({'wif': value});
    this.setState({step: 1});
  }

  initiateVerification = (address) => {
    console.log('initiateVerification', address, JSON.stringify({"wif": getFromLS('userWif', 'value') ,"source_address": address}));
    fetch('http://sc-be.what.digital/create-verification-request', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"wif": getFromLS('userWif', 'value') ,"source_address": address})
    }).then(res=>res.json())
      .then(res => console.log(res));
    this.setState({step: 3});
  }

  renderStep0() {
    return (
      <WifLoader onSubmit={this.submitWif}/>
    )
  }

  renderStep1() {
    return (
      <div className="stepContainer text-center">
        <div className="col-12 px-0">
          <h2 className="">Address of the verifying Person: </h2>
        </div>
        <WifLoader onSubmit={this.initiateVerification} verifier/>
      </div>
    )
  }

  renderStep2() {
    return (
      <div className="stepContainer text-center">
        <div className="col-12 px-0">
          <h2 className="">Your NEO Wallet address: </h2>
          <p classname="py-2">{getFromLS('userAddress', 'value')}</p>
          <div className="col-12 px-0">
            <QRCode value={getFromLS('userWif', 'value')} size={330}/>
          </div>
        </div>
        <div className="col-12 mt-2">
          <Button outline color="success" type="button" onClick={this.setState({step: 3})}>Start Verification</Button>
        </div>
      </div>
    )
  }

  renderStep3() {
    return (
      <div className="stepContainer text-center">
        <div className="col-12 px-0">
          <h2 className="">You will be notified once you get verified</h2>
        </div>
      </div>
    )
  }

  renderSteps(step) {
    if (step === 0) {
      return this.renderStep0();
    } else if (step === 1) {
      return this.renderStep1();
    } else if (step === 2) {
      return this.renderStep2();
    } else if (step === 3) {
      return this.renderStep3();
    }
  }

  render() {
    const { step } = this.state;
    return (
      <div className="content">
        {
          this.renderSteps(step)
        }
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
