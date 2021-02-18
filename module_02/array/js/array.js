"use strict";

// const friends = ['Bob', 'Mango', 'Poly', 'Ajax', 'Max', 'Dinamo', 'Carbon', 'Post'];

// console.log(friends);
// console.log(friends.length);

// console.log(friends[1]);
// console.log(friends[3]);

// friends[1] = 'Dinamo';

// console.log(friends);

// friends[5] = 'Carbon';

// console.log(friends);

// friends[6] = 'Post';
// console.log(friends);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// for (let i = 0; i < friends.length; i += 1) {
//     // console.log(i);
//     console.log(friends[i]);
// }

// for (const friend of friends) {
//     console.log(friend);
// }

// Задача. Найти друга Poly в нашем массиве друзей. И вывести сообщение

// const friends = [
//   "Bob",
//   "Mango",
//   "Poly",
//   "Ajax",
//   "Max",
//   "Dinamo",
//   "Carbon",
//   "Post",
// ];
// const searchFriend = "Poly";
// let message = "Такого друга у вас нет";

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);

//     if (friends[i] === searchFriend) {
//         message = 'Мы его нашли';
//         break;
//     } else {
//         message = 'Такого друга у вас нет';
//     }
// }

// for (let i = 0; i < friends.length; i += 1) {
//     console.log(friends[i]);

//   if (friends[i] === searchFriend) {
//     message = "Мы его нашли";
//     break;
//   }

//   if (i === friends.length - 1) {
//       console.log('the last friend :', friends[i]);
//   }
// }

// for (const friend of friends) {
//     console.log(friend);
//     if (friend === searchFriend) {
//         message = 'Мы его нашли';
//         break;
//     }
// }

// console.log(message);

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// let total = 0;


// console.log(numbers[2][0]);

// for (const numberArray of numbers) {
//     for (const number of numberArray) {
//         total += number;
//     }
// }

// console.log('total :', total);


// let a = 5;
// let b = a;

// console.log('a', a);
// console.log('b', b);

// a = 10;

// console.log('a', a)
// console.log('b', b);

// const c = [1,2,3];
// const d = c;

// console.log('c', c);
// console.log('d', d);

// c[3] = 5;

// console.log('c', c);
// console.log('d', d);

// d[0] = 10;

// console.log('c', c);
// console.log('d', d);