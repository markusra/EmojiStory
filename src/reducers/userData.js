const initialState = {
  userProgress: 1,
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
    case 'CHANGE_TEST2':
      return {
        ...state,
        test2: action.text
      }
    default:
      return state
  }
}

export default userData