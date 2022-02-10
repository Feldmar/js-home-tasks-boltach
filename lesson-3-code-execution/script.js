"use strict";

//Задание №1

var cooperator = {

'Anna': 29,
'Serg': 35, 
'Elena': 1, 
'Anton': 99

};

function employee() {
  
var a = Math.max.apply(Math, Object.values(cooperator));

for (var name in cooperator) {

    if (a === cooperator[name]) {

        console.log('Cотрудник который выполнил больше всех задач: ' + name );

    } else {

  }
}
}
employee();

// Задание №2

let image = {

    width: 200,

    height: 300,

    title: "cool image"

};
    
    
function multiplyNumeric(image) {

    for (let key in image) {

        if (typeof image[key] === "number") {

            image[key] = image[key] * 2;

        } else if (typeof image[key] === "string") {

            image[key] = "amazing image";

        }   
    }
    console.log(Object.values(image));
}

multiplyNumeric(image);

//Задание №3 (которое надо было наверное делать не через функцию видимо)

function consider() {

    var calc = [];
    
    while (true) {

      var qwe = prompt('Введите число', '');

       if (qwe == '' || qwe === null || isNaN(qwe))  // я знаю что тут нужны фигурные скобки, но с ними не работает(
       
            break;

            calc.push(+qwe);
       
    }
    
    var sum = 0;

    for (var i = 0; i < calc.length; i++) {

      sum += calc[i];

    }

    console.log(sum);

    }
    
    consider();
