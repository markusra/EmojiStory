import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCIDBmK2YtK9l-dvfXy4CUt1pNhXYf4p3s",
  authDomain: "emoji-master.firebaseapp.com",
  databaseURL: "https://emoji-master.firebaseio.com",
  projectId: "emoji-master",
  storageBucket: "emoji-master.appspot.com",
  messagingSenderId: "264449652430"
};

firebase.initializeApp(config);
firebase.auth().signInAnonymously();

export default firebase;
