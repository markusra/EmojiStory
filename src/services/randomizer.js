const seedrandom = require("seedrandom");


function randomNumber(min, max) {
  const rng = seedrandom();
  return Math.floor(rng() * max + min);
}

export function getRandomStory() {
  const randomValue = randomNumber(1, 5);
  return "quizset_" + randomValue + ".js";
}

export function getRandomAnswerOptions(randomStory) {
  const storyList = require("../api/" + "quizset_3.js");
  var answerSrcList = [];
  var randomAnswerOptions = [];

  for (var question of storyList.default.questions) {
    const allAnswers = question.answers;
    
    var counter = 0;
    while (counter < 5) {   
      const randomValue = randomNumber(0, allAnswers.length - 1);
      const randomAnswer = question.answers[randomValue];
      var possibleAnswerOption = randomAnswer;
      
      if ("emojiList" in randomAnswer) {
        const answerVariants = randomAnswer.emojiList;
        const randomVariantValue = randomNumber(0, answerVariants.length - 1);
        possibleAnswerOption = answerVariants[randomVariantValue];
        
        for (var variant of answerVariants) {
          if (possibleAnswerOption.src === variant.src.split("/")[1]) {
            break
          }

        }

      }

      if (answerSrcList.indexOf(possibleAnswerOption.src) === -1) {
        
        
        if (answerVariants)
        
        randomAnswerOptions.push(possibleAnswerOption);
        answerSrcList.push(possibleAnswerOption.src.split("/")[1])

        counter++;
      }
      console.log(answerSrcList)

    }
  }

  return randomAnswerOptions;
}
