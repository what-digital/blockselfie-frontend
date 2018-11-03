import "../../App.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import QrReader from "react-qr-reader";
var FontAwesome = require('react-fontawesome');

class GetVerified extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result",
      step: 0,
      scanner: false,
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
           <button role="button" className="qrCodeButton" title="Use QRCode Scaner" onClick={() => this.setState({scanner: !this.state.scanner})}>
               <FontAwesome
                   className='qrcode'
                   name='qrcode'
                   size='2x'
                   style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
           </button>
           <Input type="text" name="WIF" id="wif" placeholder="WIF" />
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
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(GetVerified);
