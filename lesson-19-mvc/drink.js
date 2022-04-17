'use strict';

var drinkStorage = new TLocalStorage();
      drinkStorage.reset();

function addDrink() {
  var drinkName = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  var fHash = {};

  if (drinkName) {
    fHash.recipe = prompt('Введите рецепт приготовления напитка', 'Test Recipe');
    fHash.alcohol = confirm('Ваш напиток алкогольный?') ? 'да' : 'нет';
    return drinkStorage.addValue(drinkName, fHash);
  } else {
    alert('Ввод отменен!')
  }
}

function showDrinkInfo() {
  var drinkName = prompt('Введите название напитка: ','').toLowerCase().trim();
  var getDrinkInfo = (drinkName) ? drinkStorage.getValue(drinkName) : 0;
  var resultHTML = '';

  if (getDrinkInfo) {
    var print1 = 'Напиток: ' + drinkName + '<br>';
    var print2 = 'Алкогольный: ' + getDrinkInfo.alcohol + '<br>';
    var print3 = 'Рецепт приготовления: ' + getDrinkInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function removeDrink() {
  var drinkName = prompt('Какой напиток удалить?').toLowerCase().trim();
  var delDrinkInfo = drinkStorage.deleteValue(drinkName);
  var resultHTML = '';

  if (delDrinkInfo) {
    resultHTML = 'Информация о напитке ' + drinkName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого напитка';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function showDrinksMenu() {
  var showMenuInfo = drinkStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfo.length) {
    for (var i = 0; i < showMenuInfo.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfo[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте напитки.';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

var eatStorage = new TLocalStorage();
      eatStorage.reset();

function addEat() {
  var eatName = prompt('Введите название напитка', 'Test Drink').toLowerCase().trim();
  var rHash = {};

  if (eatName) {
    rHash.recipe = prompt('Введите рецепт приготовления блюда', 'Test Recipe');
    rHash.spicy = confirm('Ваше блюдо острое?') ? 'да' : 'нет';
    return eatStorage.addValue(eatName, rHash);
  } else {
    alert('Ввод отменен!')
  }
}

function showEatInfo() {
  var eatName = prompt('Введите название блюда: ','').toLowerCase().trim();
  var getEatInfo = (eatName) ? eatStorage.getValue(eatName) : 0;
  var resultHTML = '';

  if (getEatInfo) {
    var print1 = 'Блюдо: ' + eatName + '<br>';
    var print2 = 'Острый: ' + getEatInfo.spicy + '<br>';
    var print3 = 'Рецепт приготовления: ' + getEatInfo.recipe + '<br>';

    resultHTML = print1 + print2 + print3;
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function removeEat() {
  var eatName = prompt('Какое блюдо удалить?').toLowerCase().trim();
  var delEatInfo = eatStorage.deleteValue(eatName);
  var resultHTML = '';

  if (delEatInfo) {
    resultHTML = 'Информация о блюде ' + eatName + ' удалена';
  } else {
    resultHTML = 'Ошибка! Нет такого блюда';
  }
  document.getElementById('message').innerHTML = resultHTML;
}

function showEatMenu() {
  var showMenuInfoP = eatStorage.getKeys();
  var resultHTML = '';

  if (showMenuInfoP.length) {
    for (var i = 0; i < showMenuInfoP.length; i++) {
      resultHTML += (i + 1) + '. ' + showMenuInfoP[i] + '<br>';
    }
  } else {
    resultHTML = 'Меню пустое, добавьте блюда.';
  }
  document.getElementById('message').innerHTML = resultHTML;
}