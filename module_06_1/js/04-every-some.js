
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];

  /**
   * Array.prototype.every()
   * Поэлементно перебирает оригинальный массив
   * Возвращает true если все элементы массива удовлетворяют условию
   */

  const isAllOnline = players.every(function(player){
      return player.online;
  })
//   console.log('isAllOnline : ', isAllOnline);

  /**
   * Array.prototype.some()
   * Поэлементно перебирает оригинальный массив
   * Возвращает true если хотя бы один элемент массива удовлетворяют условию
   */

  const isAnyOnline = players.some(function(player){
      return player.online;
  })
  console.log('isAnyOnline : ', isAnyOnline);