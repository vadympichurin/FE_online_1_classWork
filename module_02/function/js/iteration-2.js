// Функция для перебора массива
// Перебрать массив и вывести в консоль все значения

// const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// const logerToConsole = function(items) {
//     for(const item of items) {
//         console.log(item);
//     }
// }

// logerToConsole(friends);
// logerToConsole(numbers);

// Функция для поиска друзей
const friends = ["Mango", "Poly", "Ajax", "Kiwi"];
const nameToFind = 'Poly';



// const findFriend = function(array, name) {
//     for(const item of array) {
//         if(item === name) {
//             console.log('message : ', message);
//             return item;
//         }
//     }

//     return 'Друга нет на уроке';
// }

const findFriend = function(array, name) {
   const isFriendIn = array.includes(name); // true || false

//    if(isFriendIn) {
//        return 'Друг знайдений';
//    }

//     return 'Нема такого друга';   

    return isFriendIn ? 'Друг знайдений' : 'Нема такого друга';
}


const friend = findFriend(friends, nameToFind);
console.log('friend :', friend);

const result1 = findFriend(friends, 'Kiwi');
console.log('result1 : ', result1);

const result2 = findFriend(friends, 'Bob');
console.log('result2 : ', result2);