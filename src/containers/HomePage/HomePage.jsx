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
    getName();
    console.log('WAT?')
    // this.props.fetchToDos();
  }

  render() {
    return (
      <div className="homepageContainer text-center">
        <h2 className="">
          Block chain verified identities
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
