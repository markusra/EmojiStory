import firebase from '..//firebase'; 

export const sendDataToDB = (email) => {
  firebase.database().ref('users').set({
    email: email
  });
}

// export const sendDataToDB = (json) => {
//   var database = firebase.database();
//   const personsRef = database.ref('users');
//   personsRef.push(json);

// }
