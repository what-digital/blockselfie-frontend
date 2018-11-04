import "../../App.scss";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions/firebase";
import QrReader from "react-qr-reader";
import WebcamCapture from "../../components/WebcamCapture/WebcamCapture";
import Loading from "../../components/Loading";
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
      loading: true
    };
  }

  componentWillMount() {
    this.props.fetchImages();
  }

  renderRow(image, idx) {
    return (
      image.base64 && <div className="table-row bordered mb-4" key={idx}>
        <div className="wrapper">
          <div className="">
            <img src={image.base64} style={{width: '200px'}} className="mb-2"/>
            <p><b>Date:</b> {parseTimestamp(image.timestamp)}</p>
            <p><b>Location:</b> {image.latitude.toLocaleString() + ' ' + image.longitude.toLocaleString()}</p>
          </div>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps.history', nextProps.history.location.search);
    if (nextProps.data !== this.props.data) {
      this.setState({loading: false});
    }
  }
  
  render() {
    const { step } = this.state;
    return (
      <div className="content col-12 d-block">
        <h2 className="">Your Timeline</h2>
        {this.state.loading && <Loading text="Fetching selfies" backdrop fixed/>}
        {this.props.data && Object.keys(this.props.data).map((key, idx) => {
          return this.renderRow(this.props.data[key], idx)
        })
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

export default connect(mapStateToProps, actions)(Timeline);
