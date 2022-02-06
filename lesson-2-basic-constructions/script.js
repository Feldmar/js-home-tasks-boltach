"use strict";

// // Домашнее задание A1
// // Написать «чистую» («молчаливую») функцию для эффективного подсчёта
//  количества русских гласных букв в строке.
// // Спросить у пользователя строку. Вывести в консоль
//  количество русских гласных букв в ней.

// Вариант №1

// function words() {
//     var o = 0;

//     var transfer = ["а", "у", "о", "и", "э", "ы", "я", "ю", "е", "ё"];

//     var askString = prompt("Введите строку ...", "");

//     for (var i = 0; i < askString.length; i++) 

//     for (var z = 0; z < transfer.length; z++)

//             if (askString[i] === transfer[z]) {

//                 o++;

//                 break;

//             }
            
//             return o ;
        
// }

// console.log(words());


// Вариант №2

var str = prompt("Введите строку ...", "");
 
function searchString(str) {

    var arr = str.toLowerCase().match(/[ауоыиэяюёе]/g);

    return arr.length;
}
 
console.log(searchString(str));


