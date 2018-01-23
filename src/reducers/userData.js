const initialState = {
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
    case 'CHANGE_USERPROGRESS':
      return {
        ...state,
        userProgress: action.userProgress
      }
    default:
      return state
  }
}

export default userData