const initialState = {
  test: "hei Martin!",
  test2: "Hei Markus :)"
}

const userData = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEST':
      return {
        ...state,
        test: action.text,
        test2: action.text2
      };
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