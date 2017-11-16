function Letter(character) {
  this.character = character;
  this.displayChar = "_";
  this.emptyLetter = "_";
  this.guessed = false;

  this.getLetter = function() {
  	var letter = ' ';
  	if(this.guessed) {
  		letter = this.character
  	} else {
  		letter = this.emptyLetter
  	}
  }
}


Letter.prototype.validateLetter = function(userInput) {
  if (userInput === this.character) {
      this.displayChar = this.character;
  }
  return this.displayChar;
}

module.exports = Letter;


