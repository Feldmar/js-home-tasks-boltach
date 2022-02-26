'use strict';

function anClean(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var sort = arr[i].replace(/[^A-Z0-9]/ig, '').split('').sort().join(''); 
    obj[sort] = arr[i]; 
  }
  var result = [];
  for (var key in obj)
  result.push(obj[key]);
  return result;
}
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(anClean(arr));