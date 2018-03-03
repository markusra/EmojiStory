import firebase from "../firebase";

export const createDBEntry = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const userData = {
        answers: "",
        answerIndices: "",
        deviceType: "",
        keyboard: "",
        emojiStoryCreated: false,
        loginAttempts1: "",
        loginAttempts2: "",
        age: "",
        nationality: "",
        emojiUsage: "",
        gender: "",
        itBackground: "",
        interpretation: "",
        memorization: "",
        timestamp1: "",
        timestamp2: "",
        timestamp3: "",
        timestamp4: "",
        timestamp5: "",
        storyID: "",
        surveyFinished: false
      };

      const update = {};
      update["users/" + user.uid] = userData;

      firebase
        .database()
        .ref()
        .update(update);
    }
  });
};

export const timestampUpdateDB = (field, value, attemptsLeft) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const userID = user.uid;
      if (field === "timestamp1") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ timestamp1: value });
      }

      if (field === "timestamp2") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ timestamp2: value });
      }

      if (field === "timestamp3") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ timestamp3: value });
      }

      if (field === "timestamp4") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ timestamp4: value, loginAttempts1: attemptsLeft });
      }

      if (field === "timestamp5") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({
            timestamp5: value,
            loginAttempts2: attemptsLeft,
            surveyFinished: true
          });
      }
    }
  });
};

export const emojiStoryUpdateDB = (
  Answers,
  AnswerIndices,
  Keyboard,
  StoryID,
  DeviceType
) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase
        .database()
        .ref("users/" + user.uid)
        .update({
          answers: Answers,
          answerIndices: AnswerIndices,
          deviceType: DeviceType,
          keyboard: Keyboard,
          emojiStoryCreated: true,
          storyID: StoryID
        });
    }
  });
};

export const questionsUpdateDB = (
  Age,
  EmojiUsage,
  Gender,
  Interpretation,
  ItBackground,
  Memorization,
  Nationality
) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      firebase
        .database()
        .ref("users/" + user.uid)
        .update({
          age: Age,
          emojiUsage: EmojiUsage,
          gender: Gender,
          interpretation: Interpretation,
          itBackground: ItBackground,
          memorization: Memorization,
          nationality: Nationality
        });
    }
  });
};
