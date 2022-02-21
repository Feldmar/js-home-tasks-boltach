'use strict';

//Задание №3 проблема была в функции)))

var calc = [];  
while (true) {
  var qwe = prompt('Введите число', '');
   if (qwe == '' || qwe === null || isNaN(qwe)) {
        break;
        } 
        calc.push(+qwe);
}
var sum = 0;
for (var i = 0; i < calc.length; i++) {
  sum += calc[i];
}
console.log(sum);