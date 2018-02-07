import firebase from "../firebase";

export const sendDataToDB = (Age, Nationality, EmojiUsage, Gender, ItBackground, Interpretation, Memorization) => {
  const userKey = firebase.database().ref().child('users').push().key;

  const userData = {
    age: Age,
    nationality: Nationality,
    emojiUsage: EmojiUsage,
    gender: Gender,
    itBackground: ItBackground,
    emojiPassword: "",
    interpretation : Interpretation,
    memorization: Memorization
  }

  const update = {};
  update["users/" + userKey] = userData;

  firebase.database().ref().update(update);
 
  return userKey;

};
