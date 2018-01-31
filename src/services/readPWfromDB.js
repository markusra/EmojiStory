export const readPWfromDB = (userKey) => {

  fetch("https://emoji-master.firebaseio.com/users/" + userKey + "/emojiPassword.json")
    .then(response => response.json())
    .then(emojiPassword => {
      console.log(emojiPassword);
      return emojiPassword
    })
    .catch(error => {
      throw error;
    });

};
