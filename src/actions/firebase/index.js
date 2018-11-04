import { imagesRef, getImageRef } from "../../config/firebase";
import { FETCH_IMAGES } from "./types";

export const addImage = (hash, base64, latitude, longitude) => async dispatch => {
  const date = new Date();
  const timestamp = date.getTime()/1000;
  console.log('addImage', hash, latitude, longitude, timestamp);
  return getImageRef(hash).set({'base64': base64, 'latitude': latitude, 'longitude': longitude ,'timestamp': timestamp});
  // imagesRef.push().set(base64);
};

export const fetchImages = () => async dispatch => {
  imagesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_IMAGES,
      payload: snapshot.val()
    });
  });
};
