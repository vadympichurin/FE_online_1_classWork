/*
 * Array.prototype.forEach()
 * Поэлементно перебирает оригинальный массив
 * Ничего не возвращает
 * Заменяет классический for если не нужно прерывать цикл
 */

const numbers = [5, 8, 10, 15, 35];

const arr = [];

numbers.forEach(function(element, index, array){
console.log(element);
console.log(index);
// console.log(array);

arr.push(element * 2);
});


// console.log(doubledNumbers);

console.log(arr);
console.log(numbers);