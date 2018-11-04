import "../../App.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { getName } from "../../actions/neo/index";

class HomePage extends Component {
  state = {
    // addFormVisible: false,
    // addFormValue: ""
  };

  componentWillMount() {
    // getName();
    // console.log('WAT?')
    // this.props.fetchToDos();
  }

  render() {
    return (
      <div className="homepageContainer text-center">
        <img className="" style={{
          width: '50%', margin: '0 auto'
        }} src="/assets/images/logo2.png" />
        <h2 className="">
         Keep it real
        </h2>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, {getName})(HomePage);
