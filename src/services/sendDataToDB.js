import firebase from "../firebase";

export const sendDataToDB = (Email, Age, Nationality, EmojiUse, Gender, ItBackground) => {
  const userKey = firebase.database().ref().child('users').push().key;

  const userData = {
    email: Email,
    age: Age,
    nationality: Nationality,
    emojiUse: EmojiUse,
    gender: Gender,
    itBackground: ItBackground,
    emojiPassword: ""
  }

  const update = {};
  update["users/" + userKey] = userData;

  firebase.database().ref().update(update);
 
  return userKey;

};
