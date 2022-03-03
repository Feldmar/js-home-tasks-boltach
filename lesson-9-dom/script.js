
'use strict';
class HashStorage {
  constructor() {
    this.store_ = {}; // хранилище для значений
  }

  add(key, value) {
    this.store_[key] = value; // сохраняем значение в store
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

const coctailsStorage = new HashStorage();

// Описываем кнопки и пытаемся не выйти в окно
const addButton = document.getElementById('add-coctail');
addButton.onclick = function () {
  const coctail = {};

  const names = window.prompt('Введите название коктеля');
  const isAlcohol = window.confirm('Напиток алкогольный?');
  
  
  // Добавляем значение
  coctailsStorage.add(names, {names, isAlcohol});
  console.log('Coctail was added', coctailsStorage.getValue(names));
};

const remButton = document.getElementById('delete-coctail');

remButton.onclick = function () {
  var r = prompt('Значение');
// я делала это два дня

  console.log(coctailsStorage.deleteValue([r]));
};

const getButton = document.getElementById('get-coctail'); //это тоже работет, ура, я не тупая, счастье то какое
getButton.onclick = function () {
  var z = prompt('Название напитка');
  console.log(Object.values(coctailsStorage.getValue([z])));
};


const allButton = document.getElementById('all-coctails'); // это работает нормально, не надо его трогать
allButton.onclick = function () {
  console.log(coctailsStorage.getKeys());
};
