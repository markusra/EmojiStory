const initialState = {
  storyTemplate: [
    "The king of ***",
    " owns a three-headed ***",
    " that eats *** every day.",
    " This makes the king very ***."
  ],
  userProgress: "",
  readyFor2ndLogin: false,
  answers: [],
  keyboard: [
    {
      text: "Norway",
      src: "countries/1f1f0-1f1ec.svg"
    },
    {
      text: "Camera",
      src: "objects/1f4f7.svg"
    },
    {
      text: "Bathing",
      src: "/weather/1f324.svg"
    },
    {
      text: "Kiwi",
      src: "food/1f95d.svg"
    },
    {
      text: "Santa",
      src: "objects/1f6aa.svg"
    },
    {
      text: "Taco",
      src: "food/1f32e.svg"
    },
    {
      text: "Bear",
      src: "animals/1f413.svg"
    },
    {
      text: "Bus",
      src: "vehicle/1f68c.svg"
    },
    {
      text: "Smiley",
      src: "feelings/1f600.svg"
    },
    {
      text: "Lifting",
      src: "activities/1f3cb-1f3fd.svg"
    },
    {
      text: "Builder",
      src: "person/1f469-1f3fd.svg"
    },
    {
      text: "Mountain",
      src: "places/26f0.svg"
    }
  ],
  age: "",
  nationality: "",
  surveyPage: "gender",
  emojiUsage: "",
  gender: "",
  itBackground: "",
  interpretation: "",
  memorization: "",
  dbKey: "",
  timestamp1: 0,
  timestamp2: 0,
  loginAttempts: 0
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
    case "SET_USERSTORY":
      return {
        ...state,
        userStory: action.userStory
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
    case "SET_DBKEY":
      return {
        ...state,
        dbKey: action.dbKey
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

    case "SET_LOGINATTEMPTS":
      return {
        ...state,
        loginAttempts: action.loginAttempts
      };
    default:
      return state;
  }
};

export default userData;
