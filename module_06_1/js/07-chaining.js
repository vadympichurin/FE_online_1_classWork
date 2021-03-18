/**
 * - отфильтровать больше 7
 * - умножить все на 3
 * - отсортировать по возрастанию
 */

const numbers = [15, 5, 8, 10, 35];

// const filteredNumbers = numbers.filter(function (number) {
//   return number > 7;
// });

// const multNumbers = filteredNumbers.map(function (item) {
//   return item * 3;
// });

// const sortedNumbers = [...multNumbers].sort(function (prevNumber, nextNumber) {
//   return prevNumber - nextNumber;
// });

// console.log(filteredNumbers);
// console.log(multNumbers);
// console.log(sortedNumbers);

const result = numbers
  .filter(function (item) { return item > 7; })
  .map(function (item) {return item * 3; })
  .sort(function (prevNumber, nextNumber) {return prevNumber - nextNumber;});

// console.log("result : ", result);

/**
 * отсортировать игроков по заработанным очкам, только тех которые онлайн
 */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
];


const bestPlayersOnline = players
  .filter(function(player){ return player.online })
  .sort(function(a, b){ return a.points - b.points });


// console.log(bestPlayersOnline);