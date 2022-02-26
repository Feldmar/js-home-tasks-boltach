'use strict';

// Задание №1

function gridStr () {
    var space = ' ';
    var lattice = '#';
    var lengthString = +prompt('Введите желаюмую длинну строки', 8);
    var amtString = +prompt('Введите желаемое количество строк', 8);
    var count = 2;
    var product = '';
        for (var i = 0; i < lengthString; i++) {
            for (var n = 0; n < amtString; n++) {
                if (i % count == 0) {
                    if (n % count == 0) {
                        product += lattice;
                    } else {
                        product += space;
                    }
                }
                else {
                    if (n % count == 0) {
                        product += space;
                    } else {
                        product += lattice;
                        }
                }
            }
            console.log(product);
            product = '';
        } 
    }
gridStr();