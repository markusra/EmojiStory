import firebase from "../firebase";

export const emojiStoryUpdateDB = (
  userKey,
  Answers,
  AnswerIndices,
  Keyboard,
  Timestamp
) => {
  firebase
    .database()
    .ref("users/" + userKey)
    .update({
      answers: Answers,
      answerIndices: AnswerIndices,
      answerOptions: "",
      keyboard: Keyboard,
      emojiStoryCreated: true,
      timestamp3: Timestamp
    });
};
