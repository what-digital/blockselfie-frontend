import "../../App.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/firebase";
import Loading from "../../components/Loading";
import {parseTimestamp} from "../../utils/client";


class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      wif: "",
      scannerResult: "",
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
            <img alt={"selfie" + idx} src={image.base64} style={{width: '200px'}} className="mb-2"/>
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
    return (
      <div className="content col-12 d-block">
        <h2 className="">Your Timeline</h2>
        {this.state.loading && <Loading text="Fetching selfies" backdrop fixed/>}
        {this.props.data && Object.keys(this.props.data).map((key, idx) => {
          return this.renderRow(this.props.data[key], key)
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
