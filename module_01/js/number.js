'use strict';

// const x = "12313";

// console.log(typeof x);

// const y = Number(x);

// console.log(Number(x));

// console.log(typeof x);

// const width = "300.5888.6666px"; // 300

// console.log(width);
// console.log(Number.parseFloat(width));  

// const valid = Number('51');
// const invalid = Number('hello!');

// console.log(Number(invalid));

// console.log(Number.isNaN(Number('invalid')));

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true


let inputNumber = prompt('Введите число');
let power = prompt('Введите степень числа');

console.log('Число юзера :', inputNumber);
console.log('Степень :', power);

inputNumber = Number(inputNumber);
power = Number(power);

const result = Math.pow(inputNumber, power);

console.log('Result : ', result);
