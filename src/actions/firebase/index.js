import {imagesRef, getImageRef} from "../../config/firebase";
import {FETCH_IMAGES} from "./types";

export const addImage = (hash, base64, latitude, longitude) => async dispatch => {
  const date = new Date();
  const timestamp = date.getTime() / 1000;
  console.log('addImage', hash, latitude, longitude, timestamp);
  return getImageRef(hash).set({
    'base64': base64,
    'latitude': latitude,
    'longitude': longitude,
    'timestamp': timestamp
  });
  // imagesRef.push().set(base64);
};

export const fetchImages = () => async dispatch => {
    const address = JSON.parse(localStorage.getItem('userAddress')).value;
    fetch('https://blockselfie-backend.what.digital/api/get-verifications-for-address/', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        target_address: address,
      })
    }).then((res) => res.json())
      .then(console.log)

    imagesRef.on("value", snapshot => {
      console.log(snapshot.val())
      dispatch({
        type: FETCH_IMAGES,
        payload: snapshot.val()
      });
    });
  }
;
