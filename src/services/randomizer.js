const seedrandom = require("seedrandom");
const shuffle = require("shuffle-array");

function randomNumber(min, max) {
  const rng = seedrandom();
  return Math.floor(rng() * max + min);
}

function getRandomAmountOfAnswers(answerSrcList, allAnswers, amount) {
  var counter = 0;
  var sameEmojiFamily;
  var randomAnswerOptions = [];

  while (counter < amount) {
    const randomValue = randomNumber(0, allAnswers.length - 1);
    const randomAnswer = allAnswers[randomValue];
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
  return randomAnswerOptions;
}

function getChosenCategories(chosenEmojis) {
  var chosenCategoryList = [];
  for (var emoji of chosenEmojis) {
    chosenCategoryList.push(emoji.src.split("/")[0]);
  }
  return chosenCategoryList;
}

export function getRandomStoryFile() {
  return randomNumber(1, 5);
}

export function getRandomStory(randomStoryFile) {
  return require("../api/quizset_" + randomStoryFile + ".js").default;
}

export function getRandomAnswerOptions(randomStory) {
  var randomAnswerOptions = [];

  for (var question of randomStory.questions) {
    const allAnswers = question.answers;
    var answerSrcList = [];
    randomAnswerOptions.push(
      getRandomAmountOfAnswers(answerSrcList, allAnswers, 5)
    );
  }

  return randomAnswerOptions;
}

/*eslint no-extend-native: 0*/
Array.prototype.diff = function(a) {
  return this.filter(function(i) {
    return a.indexOf(i) < 0;
  });
};

export function getRandomKeyboard(chosenEmojis) {
  const categoryList = [
    "activities",
    "animals",
    "athletes",
    "countries",
    "feelings",
    "food",
    "objects1",
    "objects2",
    "persons",
    "places",
    "vehicles",
    "weather"
  ];
  const chosenCategories = getChosenCategories(chosenEmojis);
  const remainingCategories = categoryList.diff(chosenCategories);

  var randomKeyboardEmojis = [];
  let randomKeyboardEmojisSrc = chosenEmojis.map(
    item => item.src.split("/")[1]
  );

  for (var category of remainingCategories) {
    const allCategoryEmojis = require("../api/" + category + ".js").default[
      category
    ];

    randomKeyboardEmojis = randomKeyboardEmojis.concat(
      getRandomAmountOfAnswers(randomKeyboardEmojisSrc, allCategoryEmojis, 1)
    );

    randomKeyboardEmojisSrc.concat(
      randomKeyboardEmojis.map(item => item.src.split("/")[1])
    );
  }
  const finalKeyboard = chosenEmojis.concat(randomKeyboardEmojis);
  return shuffle(finalKeyboard);
}


export function getKeyboardWords(keyboard) {
  var keyboardWords = [];
  for (var emoji of keyboard) {
    keyboardWords.push(emoji.text)
  }
  return keyboardWords;
}