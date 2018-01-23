export const addAnswer = answer => {
  return {
    type: 'ADD_ANSWER',
    answer
  }
}

export const changeUserProgress = userProgress => {
  return {
    type: 'CHANGE_USERPROGRESS',
    userProgress
  }
}