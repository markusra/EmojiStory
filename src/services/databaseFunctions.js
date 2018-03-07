import firebase from "../firebase";

export const createDBEntry = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      const userData = {
        answers: "",
        answerIndices: "",
        backButtonCounter: "",
        confusion: "",
        deviceType: "",
        keyboard: "",
        emojiStoryCreated: false,
        fun: "",
        loginAttempts1: "",
        loginAttempts2: "",
        age: "",
        nationality: "",
        emojiUsage: "",
        gender: "",
        itBackground: "",
        memorization: "",
        timestamp1: "",
        timestamp2: "",
        timestamp3: "",
        timestamp4: "",
        timestamp5: "",
        storyID: "",
        strategy: "",
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

export const timestampUpdateDB = (field, value, attemptsLeft, CorrectPassword) => {
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
          .update({ timestamp4: value, loginAttempts1: attemptsLeft, correctPassword1: CorrectPassword });
      }

      if (field === "timestamp5") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({
            timestamp5: value,
            loginAttempts2: attemptsLeft,
            surveyFinished: true,
            correctPassword2: CorrectPassword
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
  DeviceType,
  BackButtonCounter
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
          storyID: StoryID,
          backButtonCounter: BackButtonCounter
        });
    }
  });
};

export const questionsUpdateDB = (
  Age,
  EmojiUsage,
  Gender,
  ItBackground,
  Memorization,
  Nationality,
  Strategy,
  Confusion,
  Fun
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
          itBackground: ItBackground,
          memorization: Memorization,
          nationality: Nationality,
          strategy: Strategy,
          confusion: Confusion,
          fun: Fun
        });
    }
  });
};
