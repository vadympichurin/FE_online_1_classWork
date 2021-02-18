// Псевдомассив arguments и Array.from...

// OldSchool
// const add = function () {
//    console.log(arguments);
//    const args = Array.from(arguments);
//    console.log(args);

//    let total = 0;

//    for(const arg of args){
//        total += arg;
//    }

//    return total;
// };


// new Method REST
// const add = function(...args){
//     console.log(args);
//     let total = 0;
//     for(const arg of args) {
//         total += arg;
//     }

//     return total;
// };



// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6, 7));

// Функция сложения произвольного количества элементов

// Функция прикрепления тега к строке

const titles = ['string-1', 'string-2', 'string-3', 'string-4', 'string-5', 'string-6'];
const tag = '#react';

// const stringsWithTag = [];


// for(const title of titles ) {
//     stringsWithTag.push(`${title}${tag}`);
// }

// console.log(stringsWithTag);

const addTag = function(tag, ...args) {
    const stringsWithTag = [];
    for(const arg of args) {
        stringsWithTag.push(`${tag}${arg}`);
    }

    return stringsWithTag;
};

console.log(addTag('#react@', 'string-1'));
console.log(addTag('#redux@', 'string-1', 'string-2', 'string-3'));
console.log(addTag('#jquery@', 'string-1','string-2', 'string-3', 'string-4', 'string-5', 'string-6'));