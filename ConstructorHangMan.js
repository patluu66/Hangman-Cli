var inquirer = require("inquirer");
var Word = require("./word.js");


var askQuestion = function() {

  inquirer.prompt([
    {
      type: 'text',
      name: "letter",
      message: "Guess a letter?",
      validate: function(value) {
        if(value.match(/[A-Za-z]/) && (value.length === 1)) {
          return true;
        }
        return "Try again, enter a letter.";
      }
    }
  ]).then(function(answers) {

    word.displayWord(answers.letter);
    // console.log(Word);
    askQuestion();

  });

};


var word = new Word("googlefu");
word.setWord();
word.displayWord();
askQuestion();



