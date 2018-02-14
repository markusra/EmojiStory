import firebase from "../firebase";

export const sendDataToDB = () => {
  const userKey = firebase.database().ref().child('users').push().key;

  const userData = {
    answers: [],
    answerIndices: [],
    answerOptions: "",
    keyboard: "",
    emojiStoryCreated: false,
    loginAttempts1: "",
    loginAttempts2: "",
    age: "",
    nationality: "",
    emojiUsage: "",
    gender: "",
    itBackground: "",
    interpretation : "",
    memorization: "",
    timestamp1: "",
    timestamp2: "",
    timestamp3: "",
    timestamp4: "",
    timestamp5: "",
    surveyFinished: false
  }

  const update = {};
  update["users/" + userKey] = userData;

  firebase.database().ref().update(update);
 
  return userKey;

};
