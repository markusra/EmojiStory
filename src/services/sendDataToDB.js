import firebase from "..//firebase";

export const sendDataToDB = (Email, Age, Nationality, EmojiUse) => {
  firebase
    .database()
    .ref("users")
    .push({
      email: Email,
      age: Age,
      nationality: Nationality,
      emojiUse: EmojiUse
    });
};
