'use strict';
//ЗАДАНИЕ №2 (ОНО УБИЛО ВО МНЕ ЧЕЛОВЕКА)

var obj = {
    className: 'open menu menu open'
};
var class1 = obj.className.split(' ');

function removeCls(obj, any) {
  for (var i = 0; i < class1.length; i++) {
    if (class1[i] === any) {
      class1.splice(i,1);
    }
  }
  obj.className = class1.join(' ');
console.log(obj.className);
}

removeCls(obj, 'open');
removeCls(obj, 'kmp');
removeCls(obj, 'menu'); 



