import firebase from "../firebase";

export const readPWfromDB = (userKey, field, value) => {

  firebase.database().ref("users/" + userKey).update({ field: value });

};
