/**
 * Array.prototype.map();
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив такой же длины
 */

// const numbers = [5, 8, 10, 15, 35];

// const doubledNumbers = numbers.map(function (number) {
  //   console.log(number);
  //   console.log(index);
  //   console.log(array);

  // return number * 2;
// });

// console.log(doubledNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
];

// console.log(players);

/**
 * Получаем массив имен всех игроков
 */

const playersNames = players.map(function (player) {
  return player.name;
});

// console.log('playersNames : ', playersNames);

/**
 * увеличиваем количество поинтов каждого игрока
 */

const increasePoints = players.map(function (item) {
  return {
    ...item,
    points: item.points * 1.1,
  };
});

// console.log(increasePoints);

// console.log(players);

/**
 * Увеличиваем количество часов игрока по id
 */

const idToChange = "player-3";

const increaseTime = players.map(function (player) {
  if (player.id === idToChange) {
    return {
      ...player,
      timePlayed: player.timePlayed + 59,
    };
  }

  return player;
});

// console.log(increaseTime);

/**
 * ======== Пишем .map() своими руками ============
 * 
 * - создает и возвращает новый массив
 * - перебирает оригинальный массив
 * - вызывает коллбек для каждого элемента и кидает туда аргументы (элеметн, индекс, массив)
 * - записывает результат вызова функции в новый массив
  */
 const numbers = [5, 8, 10, 15, 35];

 const map = function(array, callback){
   const newArray = [];
   
   for(let i = 0; i < array.length; i += 1){
    newArray.push(callback(array[i], i, array));
   }
   
   return newArray;
 };


 const doubledNumbers = map(numbers, function(item, index, array){
   return item * 2;
 });

 console.log('doubledNumbers : ', doubledNumbers);


