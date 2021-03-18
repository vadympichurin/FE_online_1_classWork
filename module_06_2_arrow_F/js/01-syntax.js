// const add = function (a, b) {
//   return a + b;
// };

// console.log(add(7, 9));

// const sum = (a, b) => {
//   return a + b;
// };

// const greeting = () => {
//   console.log("Hello");
// };

// greeting();

// const showMessage = function(message){
//     console.log(message)
// }

// const showMessage = message => {
//   console.log(message);
// };

// showMessage("Hello world");
// console.log(sum(3, 5))

/**
 * Синтаксис стрелочной функции
 * - с параметрами       (a, b)
 * - с одним параметром       a
 * - без параметров ()
 */

/**
 * Явный и неявный возврат
 */

const add = (a, b) => a + b;



const add1 = (a, b) => {
    return a + b
}
// console.log(add(2, 3));

const numbers = [2,3,4,5,6,7];

// const test = arr => arr.sort((a, b) => b - a);

// console.log(test(numbers));

/**
 * Псевдомассив аргументс
 */


const show = (...args) => {
    console.log(args);
}

show(2,3,4,5,7,9,7,5,4);