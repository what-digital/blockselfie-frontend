import * as firebase from "firebase";

import { FirebaseConfig } from "../config/keys";
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todo");
export const imagesRef = databaseRef.child("images");

export function getImageRef(imageHash) {
  return imagesRef.child(imageHash);
}
