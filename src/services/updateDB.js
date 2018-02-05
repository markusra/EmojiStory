import firebase from "../firebase";

export const updateDB = (userKey, field, value) => {

  firebase.database().ref("users/" + userKey).update({ field: value });

};
