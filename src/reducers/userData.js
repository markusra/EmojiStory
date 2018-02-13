const initialState = {
  storyTemplate: ["The king of ***", " owns a three-headed ***", " that eats *** every day.", " This makes the king very ***."],
  userProgress: "",
  readyFor2ndLogin: false,
  answers: [],
  keyboard: [
    {
      text: "Norway",
      src: "1f1e7-1f1fb.svg"
    },
    {
      text: "Camera",
      src: "1f4f7.svg"
    },
    {
      text: "Bathing",
      src: "1f6c0-1f3fe.svg"
    },
    {
      text: "Kiwi",
      src: "1f95d.svg"
    },
    {
      text: "Santa",
      src: "1f385-1f3fb.svg"
    },
    {
      text: "Taco",
      src: "1f32e.svg"
    },
    {
      text: "Bear",
      src: "1f43b.svg"
    },
    {
      text: "Thumb's up",
      src: "1f44d-1f3fd.svg"
    },
    {
      text: "Smiley",
      src: "1f60a.svg"
    },
    {
      text: "Lifting",
      src: "1f3cb-1f3fd.svg"
    },
    {
      text: "Builder",
      src: "1f477-1f3fe.svg"
    },
    {
      text: "Mountain",
      src: "26f0.svg"
    }
  ],
  age: "",
  nationality: "",
  surveyPage: "gender",
  emojiUsage: "",
  gender: "",
  itBackground: "",
  interpretation: "",
  memorization: ""
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
    default:
      return state;
  }
};

export default userData;
