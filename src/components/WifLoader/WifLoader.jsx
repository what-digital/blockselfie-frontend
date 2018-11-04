import React from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import QrReader from "react-qr-reader";
import {getFromLS, saveToLS} from "../../utils/client";
import {NotificationManager} from 'react-notifications';
import {wallet} from '@cityofzion/neon-js';
var FontAwesome = require('react-fontawesome');
var QRCode = require('qrcode.react');

export default class WifLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannerResult: null,
      wif: this.props.wif,
      scanner: false,
      address: ''
    };
  }

  handleScan = (data) => {
    console.log("handleScan");
    if (data) {
      this.setState({
        scannerResult: data,
        scanner: false,
        wif: data,
        address: data
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

   submitVerifierWif = (e) => {
    e.preventDefault();
    console.log("submit wif loader", this.state.address, getFromLS('verifierAddress', 'value'));
    saveToLS('verifierAddress', 'value', this.state.address);
    NotificationManager.success('Success', 'Address was saved');
    this.props.onSubmit && this.props.onSubmit(this.state.address);
  }

  submitWif = (e) => {
    e.preventDefault();
    console.log("submit wif loader", this.state.wif, getFromLS('userWif', 'value'));
    const account = new wallet.Account(getFromLS('userWif', 'value'));
    const {address} = account;
    console.log('address: ', address, account);
    saveToLS('userWif', 'value', this.state.wif);
    saveToLS('userAddress', 'value', address);
    NotificationManager.success('Success', 'You WIF has been saved');
    this.props.onSubmit && this.props.onSubmit(this.state.wif);
  }

  renderSteps() {
    return this.props.wif ? (
      <div className="stepContainer text-center">
        <div className="col-12 px-0">
          <h2 className="">Your NEO Wallet address: </h2>
          <p className="py-2">{getFromLS('userAddress', 'value')}</p>
          <div className="col-12 px-0">
            <QRCode value={getFromLS('userWif', 'value')} size={330}/>
          </div>
        </div>
        {/* {<div className="col-12 mt-2">
          <Button type="button">Start Verification</Button>
        </div>} */}
      </div>
          ) : (
      this.props.verifier ?
      <div className="stepContainer text-center">
        <form onSubmit={(e) => this.submitVerifierWif(e)} style={{textAlign: 'center'}}>
           <FormGroup>
             {/* <Label for="wif">Address</Label> */}
             <button role="button" className="qrCodeButton" title="Use QRCode Scaner" onClick={() => this.setState({scanner: !this.state.scanner})}>
                 <FontAwesome
                   className='qrcode'
                   name='qrcode'
                   size='2x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
             </button>
             <Input type="text" name="WIF" id="wif" placeholder="Address" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} />
           </FormGroup>
           <Button type="submit" outline color="success">Submit</Button>
         </form>
         {this.state.scanner && <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            className="qrCodeScanner"
          />}
        {this.state.scanner && <button type="button" onClick={() => this.setState({scanner: false})} className="closeButton fixed white">CLOSE SCANNER</button>}
      </div>
      : <div className="stepContainer text-center">
        <form onSubmit={(e) => this.submitWif(e)} style={{textAlign: 'center'}}>
          <h2 className="">Enter Your WIF</h2>
           <FormGroup>
             {/* <Label for="wif">Enter Your WIF</Label> */}
             <button type="button" className="qrCodeButton" title="Use QRCode Scaner" onClick={() => this.setState({scanner: !this.state.scanner})}>
                 <FontAwesome
                   className='qrcode'
                   name='qrcode'
                   size='2x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
             </button>
             <Input type="text" name="WIF" id="wif" placeholder="WIF" value={this.state.wif} onChange={(e) => this.setState({wif: e.target.value})} />
           </FormGroup>
           <Button type="submit" outline color="success">Submit</Button>
         </form>
         {this.state.scanner && <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            className="qrCodeScanner"
          />}
        {this.state.scanner && <button role="button" onClick={() => this.setState({scanner: false})} className="closeButton fixed white">CLOSE SCANNER</button>}
      </div>
    )
  }

  render() {
    return (
      this.renderSteps()
    );
  }
}
