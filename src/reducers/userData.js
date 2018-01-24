const initialState = {
  storyTemplate: "",
  userProgress: "",
  answers: []
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ANSWER': {
        const answers = state.answers.slice();
        answers.push(action.answer);
        
        return Object.assign({}, state, {
          answers: answers
        });
      }
    case 'SET_USERPROGRESS':
      return {
        ...state,
        userProgress: action.userProgress
      }
    case 'SET_STORYTEMPLATE':
      return {
        ...state,
        storyTemplate: action.storyTemplate
      }
    default:
      return state
  }
}

export default userData