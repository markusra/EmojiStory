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
        correctPassword1: "",
        correctPassword2: "",
        deviceType: "",
        keyboard: "",
        keyboardWords: "",
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
        surveyFinished: false,
        login1_1: "",
        login1_2: "",
        login1_3: "",
        login2_1: "",
        login2_2: "",
        login2_3: "",
        language: "",
        nrkReferrer: false
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

export const timestampUpdateDB = (
  field,
  value,
  attemptsLeft,
  CorrectPassword,
  Language,
  NrkReferrer
) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const userID = user.uid;
      if (field === "timestamp1") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ timestamp1: value, nrkReferrer: NrkReferrer });
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
          .update({
            timestamp4: value,
            loginAttempts1: attemptsLeft,
            correctPassword1: CorrectPassword
          });
      }

      if (field === "timestamp5") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({
            timestamp5: value,
            loginAttempts2: attemptsLeft,
            surveyFinished: true,
            correctPassword2: CorrectPassword,
            language: Language
          });
      }
    }
  });
};

export const emojiStoryUpdateDB = (
  Answers,
  AnswerIndices,
  Keyboard,
  KeyboardWords,
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
          keyboardWords: KeyboardWords,
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

export const loginAttemptUpdateDB = (field, value) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      const userID = user.uid;
      if (field === "login1_1") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ login1_1: value });
      }

      if (field === "login1_2") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ login1_2: value });
      }

      if (field === "login1_3") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ login1_3: value });
      }

      if (field === "login2_1") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({ login2_1: value });
      }

      if (field === "login2_2") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({
            login2_2: value
          });
      }

      if (field === "login2_3") {
        firebase
          .database()
          .ref("users/" + userID)
          .update({
            login2_3: value
          });
      }
    }
  });
};
