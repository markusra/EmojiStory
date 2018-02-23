const seedrandom = require("seedrandom");
const shuffle = require('shuffle-array');

function randomNumber(min, max) {
  const rng = seedrandom();
  return Math.floor(rng() * max + min);
}

export function getRandomStory() {
  const randomValue = randomNumber(1, 5);
  return "quizset_" + randomValue + ".js";
}

export function getRandomAnswerOptions(randomStory) {
  const storyList = require("../api/" + randomStory);
  var answerSrcList = [];
  var randomAnswerOptions = [];
  var sameEmojiFamily;

  for (var question of storyList.default.questions) {
    const allAnswers = question.answers;

    var counter = 0;
    while (counter < 5) {
      const randomValue = randomNumber(0, allAnswers.length - 1);
      const randomAnswer = question.answers[randomValue];
      var possibleAnswerOption = randomAnswer;
      sameEmojiFamily = false;

      if ("emojiList" in randomAnswer) {
        const answerVariants = randomAnswer.emojiList;
        const randomVariantValue = randomNumber(0, answerVariants.length - 1);
        possibleAnswerOption = answerVariants[randomVariantValue];
        possibleAnswerOption.text = randomAnswer.text;

        for (var variant of answerVariants) {
          for (var answerSrcElement of answerSrcList) {
            if (answerSrcElement === variant.src.split("/")[1]) {
              sameEmojiFamily = true;
              break;
            }
          }
        }
      }

      if (sameEmojiFamily === false) {
        const possibleAnswerOptionSrc = possibleAnswerOption.src.split("/")[1];
        if (answerSrcList.indexOf(possibleAnswerOptionSrc) === -1) {
          randomAnswerOptions.push(possibleAnswerOption);
          answerSrcList.push(possibleAnswerOptionSrc);

          counter++;
        }
      }
    }
  }

  return randomAnswerOptions;
}

export function getRandomKeyboard(chosenEmojis) {
  return shuffle(["Hei", "Martin", "hvordan", "går", "det", "med", "deg"])
}
