const initialState = {
  language: "en",
  storyTemplate: [],
  storyID: null,
  userProgress: "/",
  answers: [],
  answerIndices: [],
  keyboard: [],
  attemptsLeft: 3,
  correctPassword: ""
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ANSWER": {
      const answers = state.answers.slice();
      answers.push(action.answer);

      return Object.assign({}, state, {
        answers: answers
      });
    }
    case "DELETE_ANSWERS": {
      return Object.assign({}, state, {
        answers: []
      });
    }
    case "ADD_ANSWERINDICES": {
      const answerIndices = state.answerIndices.slice();
      answerIndices.push(action.answerIndex);

      return Object.assign({}, state, {
        answerIndices: answerIndices
      });
    }
    case "DELETE_ANSWERINDICES": {
      return Object.assign({}, state, {
        answerIndices: []
      });
    }
    case "SET_USERPROGRESS":
      return {
        ...state,
        userProgress: action.userProgress
      };
    case "SET_STORYTEMPLATE":
      return {
        ...state,
        storyTemplate: action.storyTemplate
      };
    case "SET_STORYID":
      return {
        ...state,
        storyID: action.storyID
      };
    case "SET_USERSTORY":
      return {
        ...state,
        userStory: action.userStory
      };
    case "SET_KEYBOARD":
      return {
        ...state,
        keyboard: action.keyboard
      };
    case "SET_LANGUAGE":
      return {
        ...state,
        language: action.language
      };
    case "SET_ATTEMPTSLEFT":
      return {
        ...state,
        attemptsLeft: action.attemptsLeft
      };
    default:
      return state;
  }
};

export default userData;
