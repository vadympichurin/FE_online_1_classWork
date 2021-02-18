"use strict";

// задача с использованием HTML input & btn & btn
// Ввести число
// Добавить число в массив
// Посчитать сумму всех чисел в массиве

// результат в консоль




const numberInputRef = document.querySelector('.js-value');
const addBtnRef = document.querySelector('.js-add-btn');
const calcBtnRef = document.querySelector('.js-calc-btn');
const numbers = [];
let total = 0;


addBtnRef.addEventListener('click', function() {
    numbers.push(numberInputRef.value);
    numberInputRef.value = '';
});

calcBtnRef.addEventListener('click', function() {
    for(const number of numbers) {
        total = total + Number(number);
    }
    console.log('total : ', total);
});



