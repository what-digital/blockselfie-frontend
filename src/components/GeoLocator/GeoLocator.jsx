import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import QrReader from "react-qr-reader";
import {getFromLS, saveToLS} from "../../utils/client";
import {NotificationManager} from 'react-notifications';
import {wallet} from '@cityofzion/neon-js';
import {geolocated} from 'react-geolocated';
var FontAwesome = require('react-fontawesome');

class GeoLocator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( !this.props.isGeolocationAvailable
        ? <div>Your browser does not support Geolocation</div>
        : !this.props.isGeolocationEnabled
          ? <div>Geolocation is not enabled</div>
          : this.props.coords
            ? <table>
              <tbody>
                <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
                <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
                <tr><td>altitude</td><td>{this.props.coords.altitude}</td></tr>
                <tr><td>heading</td><td>{this.props.coords.heading}</td></tr>
                <tr><td>speed</td><td>{this.props.coords.speed}</td></tr>
              </tbody>
            </table>
            : <div>Getting the location data</div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocator);
