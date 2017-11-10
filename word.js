var Letter = require("./letter.js")


function Word(guessWord) {
  this.guessWord = guessWord;
  this.guessWordLength = this.guessWord.length;
  this.charArray = [];
}

var Word2 = function(randomWord) {
  this.randomWord = randomWord;
  this.randomSplitWord = randomWord.toLowerCase().split('');

  this.guessWord = function() {
    var answerArray = [];

    for(var i = 0; i < this.randomWord.length; i++) {
      if(this.randomWord[i]) {
        answerArray.push(new Letter(this.randomWord[i].toLowerCase()));
      } else {
        answerArray.push(this.randomWord[i]);
      }

    }
    return answerArray;
  }

}

Word.prototype.setWord = function() {
  for (var i = 0; i < this.guessWordLength; i++) {
    this.charArray.push(new Letter(this.guessWord[i]));
  }
}

Word.prototype.displayWord = function(userInput) {
  for (var i = 0; i < this.guessWordLength; i++) {

      process.stdout.write(this.charArray[i].validateLetter(userInput));
      if (i < (this.guessWordLength - 1)) {
          process.stdout.write(" ");
      }
  }
  console.log();
}


module.exports = Word;


