/**
   * Array.prototype.sort()
   * Сортирует и ИЗМЕНЯЕТ оригинальный массив
*/

const numbers = [15, 5, 8, 10, 35];

const sortedNumbers = [...numbers].sort(function(prev, next){
   return next - prev;
});

// console.log('numbers : ', numbers);
// console.log('sortedNumbers : ', sortedNumbers);


const letters = ['B', 'b', 'a', 'A'];

const a = 'a';
// console.log('a'.charCodeAt(0));
// console.log('A'.charCodeAt(0));


letters.sort(function(prev, next){
   return prev - next;
});

// console.log(letters);

/**
 * отсортировать игроков по количеству часов
 */
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];


const sortedPlayers = [...players].sort(function(prevPlayer, nextPlayer){
   return prevPlayer.timePlayed - nextPlayer.timePlayed;
})


console.table(sortedPlayers);

console.table(players);