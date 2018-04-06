export const addAnswer = answer => {
  return {
    type: "ADD_ANSWER",
    answer
  };
};

export const addAnswerIndex = answerIndex => {
  return {
    type: "ADD_ANSWERINDICES",
    answerIndex
  };
};

export const setUserProgress = userProgress => {
  return {
    type: "SET_USERPROGRESS",
    userProgress
  };
};

export const setStoryTemplate = storyTemplate => {
  return {
    type: "SET_STORYTEMPLATE",
    storyTemplate
  };
};

export const setStoryID = storyID => {
  return {
    type: "SET_STORYID",
    storyID
  };
};

export const setUserStory = userStory => {
  return {
    type: "SET_USERSTORY",
    userStory
  };
};

export const setKeyboard = keyboard => {
  return {
    type: "SET_KEYBOARD",
    keyboard
  };
};

export const deleteAnswers = () => {
  return {
    type: "DELETE_ANSWERS"
  };
};

export const deleteAnswerIndices = () => {
  return {
    type: "DELETE_ANSWERINDICES"
  };
};

export const setLanguage = language => {
  return {
    type: "SET_LANGUAGE",
    language
  };
};

export const setAttemptsLeft = attemptsLeft => {
  return {
    type: "SET_ATTEMPTSLEFT",
    attemptsLeft
  };
};
