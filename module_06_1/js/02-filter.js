/**
 * Array.prototype.filter();
 * Поэлементно перебирает оригинальный массив
 * Возвращает новый массив
 * Добавляет в новый массив элементы которые удовлетворяют условию
 */


 const numbers = [5,8,10,15,35];

 const newNumbers = numbers.filter(function(number){
      return number > 5 && number < 18;
 });

//  console.log(newNumbers);

 // console.log(element);
 // console.log(index);
 // console.log(array);


 const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];

/**
 * Получаем массив всех онлайн игроков
 */

const online = players.filter(function(item){
    return item.online;
})

// console.log(online);

/**
 * Получаем массив всех оффлайн игроков
 */

const offline = players.filter(function(item){
    return !item.online;
});

// console.log(offline);

/**
 * ПОлучаем список самых лучших игроков со временем больше 250
 */

const bestPlayers = players.filter(function(item) {
    return item.timePlayed > 250;
});

// console.log(bestPlayers);

