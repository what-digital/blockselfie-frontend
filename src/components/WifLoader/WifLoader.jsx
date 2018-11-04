import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import QrReader from "react-qr-reader";
import {getFromLS, saveToLS} from "../../utils/client";
import {NotificationManager} from 'react-notifications';
var FontAwesome = require('react-fontawesome');
var QRCode = require('qrcode.react');

export default class WifLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scannerResult: null,
      wif: this.props.wif,
      scanner: false,
    };
  }

  handleScan = (data) => {
    console.log("handleScan");
    if (data) {
      this.setState({
        scannerResult: data,
        scanner: false,
        wif: data
      });
    }
  }

  handleError(err) {
    console.error(err);
  }

  submitWif = (e) => {
    e.preventDefault();
    console.log("submit wif loader", this.state.wif);
    saveToLS('user', 'wif', this.state.wif);
    NotificationManager.success('Success message', 'You WIF has been saved');
    this.props.onSubmit && this.props.onSubmit(this.state.wif);
  }

  renderSteps() {
    return this.props.wif ? (
      <div className="stepContainer text-center">
        <div className="col-12 px-0">
          <h2 className="mb-2">Your NEO Wallet address: </h2>
          <p>{getFromLS('user', 'wif')}</p>
          <div className="col-12 px-0">
            <QRCode value={getFromLS('user', 'wif')} size={330}/>
          </div>
        </div>
{/* {        <div className="col-12 mt-2">
          <Button type="button">Start Verification</Button>
        </div>} */}
      </div>
          ) : (
      <div className="stepContainer text-center">
        <form onSubmit={(e) => this.submitWif(e)} style={{textAlign: 'center'}}>
           <FormGroup>
             <Label for="wif">Enter Your WIF</Label>
             <button type="button" className="qrCodeButton" title="Use QRCode Scaner" onClick={() => this.setState({scanner: !this.state.scanner})}>
                 <FontAwesome
                   className='qrcode'
                   name='qrcode'
                   size='2x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                 />
             </button>
             <Input type="text" name="WIF" id="wif" placeholder="WIF" value={this.state.scannerResult || this.state.wif} onChange={(e) => this.setState({wif: e.target.value})} />
           </FormGroup>
           <Button type="submit">Submit</Button>
         </form>
         {this.state.scanner && <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            className="qrCodeScanner"
          />}
        {this.state.scanner && <button role="button" onClick={() => this.setState({scanner: false})} className="closeButton">CLOSE SCANNER</button>}
      </div>
    )
  }

  render() {
    return (
      this.renderSteps()
    );
  }
}
