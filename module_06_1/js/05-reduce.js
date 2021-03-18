  /**
   * Array.prototype.reduce()
   * Поэлементно перебирает оригинальный массив
   * Возвращает что угодно 
   * Заменяет все на свете , но использовать нужно с умом
   */

   const numbers = [15, 5, 8, 10, 35];

   const total = numbers.reduce(function(accumulator, number){
    //    console.log('accumulator : ', accumulator);
    //    console.log('number : ', number);

       return accumulator = accumulator + number;
   }, 0)
//    console.log('total : ', total);

/*
* схема как работает
*/







/**
 * считаем общую ЗП
 */ 

const salary = {
    mango: 150,
    poly: 300,
    kiwi: 278,
}

const totalSalary = Object.values(salary).reduce(function(acc, item){
    // console.log(acc);
    return acc + item;
}, 0);

// console.log('totalSalary : ', totalSalary);

/*
* Посчитать общее количество часов игроков
*/ 
 
const players = [
    { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
    { id: "player-2", name: "Poly", timePlayed: 270, points: 44, online: false },
    { id: "player-3", name: "Kiwi", timePlayed: 150, points: 34, online: true },
    { id: "player-4", name: "Ajax", timePlayed: 510, points: 84, online: false },
    { id: "player-5", name: "Chelsy", timePlayed: 210, points: 64, online: true },
  ];

const totalTimePlayed = players.reduce(function(time, player){
    // console.log(time);
    // console.log(player);

    return time + player.timePlayed;
}, 0);
// console.log('totalTimePlayed : ', totalTimePlayed);


/*
 *  считаем сумму всех товаров в корзине
 */ 

const cart = [
    { label: 'Apples', price: 100, quantity: 2 },
    { label: 'Bananas', price: 170, quantity: 4 },
    { label: 'Lemones', price: 210, quantity: 3 },
];

const totalAmount = cart.reduce(function(acc, item){
    return acc + item.price * item.quantity;
}, 0);

// console.log('totalAmount : ', totalAmount);


/*
* собираем все теги из твитов 
*/ 

const tweets = [
    {id: '000', likes: 5, tags: ['js', 'nodejs']},
    {id: '001', likes: 7, tags: ['html', 'css']},
    {id: '002', likes: 55, tags: ['html', 'js', 'nodejs']},
    {id: '003', likes: 7, tags: ['css', 'react']},
    {id: '004', likes: 13, tags: ['js', 'nodejs', 'react']},
];

const allTags = tweets.reduce(function(acc, tweet){
    // console.log(acc);
    // console.log(tweet);

    return [...acc, ...tweet.tags];
}, []);

// console.log('allTags : ', allTags);


/**
 * возвращаем объект со статистикой каких тегов сколько 
 * {
 *   js: 3,
 *   nodejs: 3,
 *   css: 3
 * }
 */

const test = {};


test.name = "mango";


// console.log('test : ', test);

const tagsStatistic = allTags.reduce(function(acc, item){
    acc[item] = acc.hasOwnProperty(item) ? acc[item] += 1 : 1;
    return acc;
}, {});

console.log('tagsStatistic : ', tagsStatistic);