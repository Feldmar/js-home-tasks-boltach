'use strict';

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.viewQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ' - ' + this.answers[i]);
    }
  };
    
  Question.prototype.verifyAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct!)))');
    } else {
        console.log('Wrong!!!');
      }
  };
    
  var que0 = new Question('Who stole the corals from Clara?', ['Carl', 'Peter Pan'], 0);                                        
  var que1 = new Question('What was the name of Han Solo lover?', ['Chewbacca', 'Leia Organa', 'Anakin Skywaker'], 1);                                       
  var que2 = new Question('What was the name of Frodo Baggins best friend?', ['Gollum', 'Harry Potter', 'Smaug', 'Samwise Gamgee'], 3);
    
  var questions = [que0, que1, que2];
  var estimation = Math.floor(Math.random() * questions.length);  
  questions[estimation].viewQuestion();
  var answer = parseInt(prompt('Answer question № '+estimation)); 
  questions[estimation].verifyAnswer(answer);

})();