function interviewQuestion(work) {
  if (work === 'designer') {
    return function(designation) {
      console.log(designation + ' can you please explain what UX design is ?');
      };
  } else if (work === 'teacher') {
      return function(designation) {
        console.log('What subject do you teach ' + designation + ' ?');
      };
  } else {
      return function(designation) {
        console.log('Hello ' + designation + ', what do you do ?');
      };
  }
}

var designerInterviewQuestion = interviewQuestion('designer');
var teacherInterviewQuestion = interviewQuestion('teacher');

interviewQuestion('teacher')('John');
interviewQuestion('designer')('Milla');
interviewQuestion('teacher')('Kai');
interviewQuestion('odorologist')('Robert');
interviewQuestion('father')('Darth Vader');