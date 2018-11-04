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
      step: getFromLS('user', 'wif') ? 1 : 0,
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

  renderStep0() {
    return (
      <WifLoader onSubmit={this.submitWif}/>
    )
  }

  renderStep1() {
    return (
      <div className="stepContainer text-center">
        <div className="col-12">
          Your NEO Wallet address: {getFromLS('user', 'wif')}
          <div className="col-12">
            <QRCode value={getFromLS('user', 'wif')} size='360'/>
          </div>
        </div>
        <div className="col-12 mt-2">
          <Button type="button">Start Verification</Button>
        </div>
      </div>
    )
  }

  renderSteps(step) {
    if (step === 0) {
      return this.renderStep0()
    } else if (step ===1) {
      return this.renderStep1()
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
