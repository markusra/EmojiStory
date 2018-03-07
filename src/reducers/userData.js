const initialState = {
  language: "en",
  storyTemplate: [],
  storyID: null,
  userProgress: "/",
  readyFor2ndLogin: false,
  answers: [],
  answerIndices: [],
  keyboard: [],
  age: "",
  nationality: "",
  surveyPage: "emojiUsage",
  emojiUsage: "",
  gender: "",
  itBackground: "",
  interpretation: "",
  memorization: "",
  strategy: "",
  timestamp1: 0,
  timestamp2: 0,
  deviceType: "",
  attemptsLeft: 3,
  confusion: "",
  fun: ""
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
    case "SET_READYFOR2NDLOGIN":
      return {
        ...state,
        readyFor2ndLogin: true
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.age
      };
    case "SET_NATIONALITY":
      return {
        ...state,
        nationality: action.nationality
      };
    case "SET_EMOJIUSAGE":
      return {
        ...state,
        emojiUsage: action.emojiUsage,
        surveyPage: action.surveyPage
      };
    case "SET_GENDER":
      return {
        ...state,
        gender: action.gender,
        surveyPage: action.surveyPage
      };
    case "SET_ITBACKGROUND":
      return {
        ...state,
        itBackground: action.itBackground,
        surveyPage: action.surveyPage
      };
    case "SET_INTERPRETATION":
      return {
        ...state,
        interpretation: action.interpretation,
        surveyPage: action.surveyPage
      };
    case "SET_MEMORIZATION":
      return {
        ...state,
        memorization: action.memorization,
        surveyPage: action.surveyPage
      };
    case "SET_TIMESTAMP1":
      return {
        ...state,
        timestamp1: action.timestamp1
      };
    case "SET_TIMESTAMP2":
      return {
        ...state,
        timestamp2: action.timestamp2
      };
    case "SET_DEVICETYPE":
      return {
        ...state,
        deviceType: action.deviceType
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
    case "SET_STRATEGY":
      return {
        ...state,
        strategy: action.strategy,
        surveyPage: action.surveyPage
      };
    case "SET_CONFUSION":
      return {
        ...state,
        confusion: action.confusion,
        surveyPage: action.surveyPage
      };
    case "SET_FUN":
      return {
        ...state,
        fun: action.fun,
        surveyPage: action.surveyPage
      };
    default:
      return state;
  }
};

export default userData;
