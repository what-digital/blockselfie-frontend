// import "./ToDoList.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import * as actions from "../../actions";
import ToDoListItem from "../../components/ToDoListItem";
import Loading from "../../components/Loading";
import {getFromLS, saveToLS} from "../../utils/client";
import { NavLink } from 'reactstrap';

var QRCode = require('qrcode.react');


class VerificationFlow extends Component {
  state = {
    step: 0,
    loading: false
  };

  componentWillMount() {
    // this.props.fetchToDos();
  }

  submitWif = (value) => {
    console.log("submit wif ver flow", value);
    const { sendWif } = this.props;
    sendWif({'wif': value});
    this.setState({step: 1});
  }

  renderStep0 = () => {
    return (
      <div className="stepContainer text-center">
        <div className="col-12 mb-4">
          My QR Code:
        </div>
        <div className="col-12 px-0">
          <QRCode value={getFromLS('userWif', 'value')} size={330}/>
        </div>
      </div>
    )
  }

  renderSteps(step) {
    if (step === 0) {
      return getFromLS('userWif', 'value') ? this.renderStep0() : <NavLink href="/wif-loader/">Enter your WIF first</NavLink>
    }
  }

  render() {
    const { step, loading } = this.state;
    return (
      <div className="content">
        {loading && <Loading text="Fetching..."/>}
        {this.renderSteps(step)}
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(VerificationFlow);
