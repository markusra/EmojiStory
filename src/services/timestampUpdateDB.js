import firebase from "../firebase";

export const timestampUpdateDB = (userKey, field, value, attemptsLeft) => {
  if (field === "timestamp1") {
    firebase
      .database()
      .ref("users/" + userKey)
      .update({ timestamp1: value });
  }

  if (field === "timestamp2") {
    firebase
      .database()
      .ref("users/" + userKey)
      .update({ timestamp2: value });
  }

  if (field === "timestamp3") {
    firebase
      .database()
      .ref("users/" + userKey)
      .update({ timestamp3: value });
  }

  if (field === "timestamp4") {
    firebase
      .database()
      .ref("users/" + userKey)
      .update({ timestamp4: value, loginAttempts1: attemptsLeft });
  }

  if (field === "timestamp5") {
    firebase
      .database()
      .ref("users/" + userKey)
      .update({
        timestamp5: value,
        loginAttempts2: attemptsLeft,
        surveyFinished: true
      });
  }
};
