export const addAnswer = answer => {
  return {
    type: 'ADD_ANSWER',
    answer
  }
}

export const setUserProgress = userProgress => {
  return {
    type: 'SET_USERPROGRESS',
    userProgress
  }
}

export const setStoryTemplate = storyTemplate => {
  return {
    type: 'SET_STORYTEMPLATE',
    storyTemplate
  }
}

export const setUserStory = userStory => {
  return {
    type: 'SET_USERSTORY',
    userStory
  }
}

export const deleteAnswers = () => {
  return {
    type: 'DELETE_ANSWERS'
  }
}



