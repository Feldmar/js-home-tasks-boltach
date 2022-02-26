'use strict';

function isPal(palindromStr) {
  var cleaning = palindromStr.replace(/[^A-Z0-9]/ig, ''); 
  var verify = cleaning.split('').reverse().join('');
  return cleaning === verify;
}
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('zz7'));
console.log(isPal('787'));
console.log(isPal('Уж редко рукою окурок держу'));


function isPal(str) { 
  return str == str.split('').reverse().join('');
}

String.prototype.al = function() { 
  return this.replace(/[^a-zA-Z0-9]/ig, ''); 
};

console.log(isPal('ingirumimusnocteetconsumimurigni'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('zz7'));
console.log(isPal('787'));
console.log(isPal('Уж редко рукою окурок держу'));

