import firebase from "../firebase";

export const questionsUpdateDB = (
  userKey,
  Age,
  EmojiUsage,
  Gender,
  Interpretation,
  ItBackground,
  Memorization,
  Nationality
) => {
  firebase
    .database()
    .ref("users/" + userKey)
    .update({
      age: Age,
      emojiUsage: EmojiUsage,
      gender: Gender,
      interpretation: Interpretation,
      itBackground: ItBackground,
      memorization: Memorization,
      nationality: Nationality
    });
};
