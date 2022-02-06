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


// // Домашнее задание A2
// Спросить у пользователя:
// ● фамилию, имя, отчество РАЗДЕЛЬНО (оператором prompt)
// ● возраст в годах (оператором prompt)
// ● пол (оператором confirm, например, "ваш пол - мужской?")
// и вывести одним оператором alert анкету пользователя по примеру:
// ваше ФИО: Иванов Иван Иванович
// ваш возраст в годах: 20
// ваш возраст в днях: 7300
// через 5 лет вам будет: 25
// ваш пол: мужской
// вы на пенсии: нет

// Должен быть контроль корректности вводимых пользователем данных (например,
// фамилия не должна быть пустой, возраст должен быть корректной цифрой и т.д.).
// Оператор alert в коде должен использоваться ровно один раз.

for (var i = 0; i < 1; i++) {
    var surname = prompt('Введите вашу фамилию ...','');
     if (surname == '' || surname == null) {
       i--,
       confirm('Вы не ввели фамилию!');
       } else {  
       }
   }
   
   for (var i = 0; i < 1; i++) {
     var youName = prompt('Введите ваше имя ...','');
     if (youName == '' || youName == null) {
       i--,
       confirm('Вы не ввели имя!');
       } else {  
       }
   }
   
   for (var i = 0; i < 1; i++) {
     var secname = prompt('Введите ваше отчество ...','');
     if (secname == '' || secname == null) {
       i--,
       confirm('Вы не ввели ваше отчество!');
       } else {  
       }
   }
   
   for (var i = 0; i < 1; i++) {
     var years = +prompt('Введите ваш возраст в годах ...','');
     years = Math.round(years);
     if (isNaN(years) || years > 150 || years == '' || years == null) {
       i--,
       confirm('Введите ваш возраст правильно!');
       } else {  
       }
   }
   for (var i = 0; i < 1; i++) {
     var gender = confirm('Вы мужчина?');
     if (gender == true) {
       gender = "Мужской";
     } else {
       gender = "Женский";
     }
   }
   
   var fiveYears = years + 5;
   
   var ageInDays = years * 365;
   
   var pensionYears = years;
   if (pensionYears >= 63) {
     pensionYears = "Да";
   } else {
     pensionYears = "Нет";
   }
   
  alert('ваше ФИО: ' + youName + "\u00A0" + surname + "\u00A0" + secname + '\n' + 
        'ваш полный возраст в годах: ' + years + '\n' + 
        'ваш возраст в днях: ' + ageInDays + '\n' + 
        'через 5 лет вам будет: ' + fiveYears + '\n' + 
        'ваш пол: ' + gender + '\n' + 
        'вы на пенсии: ' + pensionYears);
