import firebase from "../firebase";

export const sendDataToDB = (Age, Nationality, EmojiUse, Gender, ItBackground, Memorization) => {
  const userKey = firebase.database().ref().child('users').push().key;

  const userData = {
    age: Age,
    nationality: Nationality,
    emojiUse: EmojiUse,
    gender: Gender,
    itBackground: ItBackground,
    emojiPassword: "",
    memorization: Memorization
  }

  const update = {};
  update["users/" + userKey] = userData;

  firebase.database().ref().update(update);
 
  return userKey;

};
