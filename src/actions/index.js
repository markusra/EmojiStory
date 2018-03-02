export const addAnswer = answer => {
  return {
    type: 'ADD_ANSWER',
    answer
  }
}

export const addAnswerIndex = answerIndex => {
  return {
    type: 'ADD_ANSWERINDICES',
    answerIndex
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

export const setStoryID = storyID => {
  return {
    type: 'SET_STORYID',
    storyID
  }
}

export const setUserStory = userStory => {
  return {
    type: 'SET_USERSTORY',
    userStory
  }
}

export const setKeyboard = keyboard => {
  return {
    type: 'SET_KEYBOARD',
    keyboard
  }
}

export const deleteAnswers = () => {
  return {
    type: 'DELETE_ANSWERS'
  }
}

export const deleteAnswerIndices = () => {
  return {
    type: 'DELETE_ANSWERINDICES'
  }
}

export const setReadyFor2ndLogin = readyFor2ndLogin => {
  return {
    type: 'SET_READYFOR2NDLOGIN',
    readyFor2ndLogin
  }
}

export const setAge = (age) => {
  return {
    type: 'SET_AGE',
    age
  }
}

export const setNationality = (nationality) => {
  return {
    type: 'SET_NATIONALITY',
    nationality
  }
}

export const setEmojiUsage = (emojiUsage, surveyPage) => {
  return {
    type: 'SET_EMOJIUSAGE',
    emojiUsage,
    surveyPage
  }
}

export const setGender = (gender, surveyPage) => {
  return {
    type: 'SET_GENDER',
    gender,
    surveyPage
  }
}

export const setItBackground = (itBackground, surveyPage) => {
  return {
    type: 'SET_ITBACKGROUND',
    itBackground,
    surveyPage
  }
}

export const setInterpretation = (interpretation, surveyPage) => {
  return {
    type: 'SET_INTERPRETATION',
    interpretation,
    surveyPage
  }
}

export const setMemorization = (memorization, surveyPage) => {
  return {
    type: 'SET_MEMORIZATION',
    memorization,
    surveyPage
  }
}

export const setTimestamp1 = timestamp1 => {
  return {
    type: 'SET_TIMESTAMP1',
    timestamp1
  }
}

export const setTimestamp2 = timestamp2 => {
  return {
    type: 'SET_TIMESTAMP2',
    timestamp2
  }
}

export const setDeviceType = deviceType => {
  return {
    type: 'SET_DEVICETYPE',
    deviceType
  }
}
