import "../../App.scss";
import { Button, Input, FormGroup } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import QrReader from "react-qr-reader";
var FontAwesome = require('react-fontawesome');


class Lookup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      wif: "",
      scannerResult: "",
      scanner: false,
    };
  }

  handleScan = (data) => {
    console.log("handleScan");
    if (data) {
      this.setState({
        scannerResult: data,
        wif: data,
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

  render() {
    return (
      <div className="content">
      <form onSubmit={(e) => this.submitWif(e)} style={{textAlign: 'center'}}>
        <h2 className="">Lookup</h2>
         <FormGroup>
           {/* <Label for="wif">Confirm Identity</Label> */}
           <button role="button" className="qrCodeButton" title="Use QRCode Scaner" onClick={() => this.setState({scanner: !this.state.scanner})}>
               <FontAwesome
                 className='qrcode'
                 name='qrcode'
                 size='2x'
                 style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
               />
           </button>
           <Input type="text" name="neoAddress" id="neoAddress" placeholder="NEO Address" value={this.state.wif} onChange={(e) => this.setState({wif: e.target.value})}/>
         </FormGroup>
         <Button  outline color="success" type="submit">Submit</Button>
       </form>
       {this.state.scanner && <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          className="qrCodeScanner"
        />}
        {this.state.scanner && <button role="button" onClick={() => this.setState({scanner: false})} className="closeButton fixed white">CLOSE SCANNER</button>}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(Lookup);
