'use strict';

class HashStorage {
  constructor() {
    this.store_ = {}; 
  }

  add(key, value) {
    this.store_[key] = value; 
  }

  getValue(key) {
    return this.store_[key]; 
  }

  deleteValue(key) {
    if(!(key in this.store_)) {
      return false;
    }
    return delete this.store_[key];
  }

  getKeys() {
    return Object.keys(this.store_);
  }  
}

var coctailsStorage = new HashStorage();

var addButton = document.getElementById('add-coctail');
addButton.onclick = function () {
  var names = window.prompt('Введите название коктеля');
  var isAlcohol = window.confirm('Напиток алкогольный?');
  isAlcohol ? isAlcohol = 'да' : isAlcohol = 'нет';
  var recipe = window.prompt('Поделитесь рецептом пожалуйста...');
  coctailsStorage.add(names, {names, isAlcohol, recipe});
  console.log('Coctail was added', coctailsStorage.getValue(names));
};

var remButton = document.getElementById('delete-coctail');
remButton.onclick = function () {
  var r = prompt('Значение');
  console.log(coctailsStorage.deleteValue([r]));
};

var getButton = document.getElementById('get-coctail');
getButton.onclick = function () {
  var z = prompt('Введите название напитка котрый хотите найти ...');
  var getCoctails = document.querySelector('p');
  getCoctails.innerHTML = 'Название напитка : ' +Object.values(coctailsStorage.getValue(z)).slice(0, 1) + '<br>\n' + 
  'Алкогольный : ' +Object.values(coctailsStorage.getValue(z)).slice(1, 2) + '<br>\n' + 
  'Рецепт : ' +Object.values(coctailsStorage.getValue(z)).slice(2, 3); //читерство, как есть
  console.log(Object.values(coctailsStorage.getValue(z)));
};

var allButton = document.getElementById('all-coctails'); 
allButton.onclick = function () {
  var allCoctails = document.querySelector('p');
  allCoctails.innerHTML = 'Названия всех напитков : ' + coctailsStorage.getKeys() ;
  console.log(coctailsStorage.getKeys());
};
