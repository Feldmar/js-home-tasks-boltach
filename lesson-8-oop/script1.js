'use strict';

(function () {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
      }
    };

  Question.prototype.checkAnswer = function (ans, callback) {
    if (ans === this.correct) {
      console.log('Correct answer!');
      sc = callback(true);
    } else {
      console.log('Wrong answer. Try again :)');
      sc = callback(false);
      }
    this.displayScore(sc);
  };

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);
  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);
  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);
  var q4 = new Question('Who stole the corals from Clara?', 
    ['Carl', 'Peter Pan'],
    0);                                        
  var q5 = new Question('What was the name of Han Solo lover?',
    ['Chewbacca', 'Leia Organa', 'Anakin Skywaker'], 
    1);                                       
  var q6 = new Question('What was the name of Frodo Baggins best friend?',
    ['Gollum', 'Harry Potter', 'Smaug', 'Samwise Gamgee'],
    3);

  var questions  = [q1, q2, q3, q4, q5, q6];

  function sc() {
    var score = 0;
    return function (correct) {
      if (correct) {
        score++;
      }
      return score;
    };
  }

  Question.prototype.displayScore = function (score) {
    console.log('Your score is : ' + score);
  };

  var estimation = sc();
  
  function askNextQuestion() {
    var randomQuestion = [Math.floor (Math.random() * questions.length)];
    questions[randomQuestion].displayQuestion();
    var askPlay = prompt('Please select the correct answer.');
    if (askPlay != 'exit') {
      questions[randomQuestion].checkAnswer(parseInt(askPlay), estimation);
      askNextQuestion();
    }
  }
askNextQuestion();

})();