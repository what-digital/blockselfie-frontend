import React from "react";
import Webcam from "react-webcam";


export default class WebcamCapture extends React.Component {
  setRef = webcam => {
    this.webcam = webcam;
  };

  capture = () => {
    // console.log('capture');
    const imageSrc = this.webcam.getScreenshot();
    console.log('imageSrc', imageSrc);
    this.props.photoTaken(imageSrc);
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <Webcam
          audio={false}
          height={'100%'}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={'100%'}
          style={{  position: 'fixed', left: 0, top: 0, backgroundColor: 'black'}}
          videoConstraints={videoConstraints}
        />
          <button onClick={this.capture} className="closeButton fixed white" style={{bottom: '100px', height: '40px', top: 'auto'}}>Capture photo</button>
      </div>
    );
  }
}
