import * as firebase from "firebase"


const config = {
    apiKey: "AIzaSyAxdyCynvamaUB_JFLBkBwzKvdX9Qi9gd4",
    authDomain: "fittrackify-c32d0.firebaseapp.com",
    databaseURL: "https://fittrackify-c32d0.firebaseio.com",
    projectId: "fittrackify-c32d0",
    storageBucket: "fittrackify-c32d0.appspot.com",
    messagingSenderId: "891005291863"
  };

firebase.initializeApp(config);


const database = firebase.database()
const googleProvider = new firebase.auth.GoogleAuthProvider()

export {firebase, googleProvider, database as default};

