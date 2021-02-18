"use strict";

// result
// the-10-benefits-of-using-react-framework
// 1 Сделать с помощью split-join
// 2 Join для практики сделать своими руками через циклы

// Лучшее решение!!!!!!
const title = 'The 10 benefits of using React framework';
const normilizedTitle = title.toLowerCase();
const words = normilizedTitle.split(' ');
const result = words.join('-');
// ==================================

// const title = "The 10 benefits of using React framework";
// const normilizedTitle = title.toLowerCase();
// const words = normilizedTitle.split(" ");
// let result = "";

// for (let i = 0; i < words.length; i += 1) {
//   // if (i !== words.length -1) {
//   //     result = result + words[i] + '-';
//   // } else {
//   //     result = result + words[i];
//   // }

//   // const test = условие ? T : F;
//   const isNotTheLastValue = i !== words.length - 1;
//   result = isNotTheLastValue 
//     ? result + words[i] + "-" 
//     : result + words[i];
// }

// console.log("normilizedTitle : ", normilizedTitle);
// console.log("words : ", words);
// console.log("result : ", result);
