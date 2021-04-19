import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAVivzL_-BETPop2pvfyp_wev3x2jN_KHY",
    authDomain: "uv-videos.firebaseapp.com",
    projectId: "uv-videos",
    storageBucket: "uv-videos.appspot.com",
    messagingSenderId: "813096389699",
    appId: "1:813096389699:web:d423c9c4554875262518f6",
    measurementId: "G-P2WCW75ESX"
  };
  // Initialize Firebase

  if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

  const storage = firebase.storage();
  const firestorage = firebase.firestore();

  export { storage, firestorage };