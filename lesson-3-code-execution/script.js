'use strict';

//Задание №1

var cooperator = {
'Anna': 29,
'Serg': 35, 
'Elena': 1, 
'Anton': 9
};

function employee() {
var a = Math.max.apply(Math, Object.values(cooperator)); 

for (var name in cooperator) {
    if (a === cooperator[name]) {
        console.log('Cотрудник который выполнил больше всех задач: ' + name );
    } 
}
}
employee();