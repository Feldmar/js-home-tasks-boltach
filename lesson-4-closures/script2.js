'use strict';
//ЗАДАНИЕ №2 (ОНО УБИЛО ВО МНЕ ЧЕЛОВЕКА)

var obj = {
    className: 'open menu menu open'
};
var classes = obj.className.split(' ');

function removeCls(obj, any) {
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === any) {
      classes.splice(i,1);
      i++;
    }
  }
  obj.className = classes.join(' ');
console.log(obj.className);
}

removeCls(obj, 'open');
removeCls(obj, 'kmp');
removeCls(obj, 'menu'); 



