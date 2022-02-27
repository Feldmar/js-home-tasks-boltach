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




String.prototype.isPal = function () { // проблема в пробелах и верхнем регистре
  return this.replace(/[^A-Z0-9]/ig, ''); 
};
function isPal(str) { 
  return str === str.split('').reverse().join('');
}
console.log(isPal('ingirumimusnocteetconsumimurigni'));
console.log(isPal('АрозаупаланалапуАзора'));
console.log(isPal('zz7'));
console.log(isPal('787'));
              