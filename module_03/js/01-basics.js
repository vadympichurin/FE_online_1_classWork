/*
 * Литарел объекта, свойства, ключи (имя) и значение
 */

//  const user = {
//      name: 'Bob',
//      isOnline: true,
//      isFriend: false,
//   };

// const hotel = {
//   name: "Holiday In",
//   stars: 5,
//   capacity: 100,
//   guests: 35,
// };

/*
 * Доступ к свойству через obj.key & obj['key']
 * Перезаписать значение свойства
 * Добавить новое свойство
 */

// console.table(hotel);

// const key = 'stars';
// console.log(hotel[key]);


// hotel.stars = 3;
// console.log(hotel.stars);

// hotel.restaurant = 'Mishlen';
// console.table(hotel);



/*
 *Объект это ссылочный тип {} === {}
 */

//  const a = {a: 10, b: 20};
//  const b = {a: 10, b: 20};
//  const c = a;

// console.log(a === b);
// console.log(a === c);

// c.d = 30;

// console.table(a);


/*
 * Массивы и функции это объекты
 */

//  const arr = ['a','b','c','d',];
// console.log(typeof arr);
//  console.log(arr[3]);

//  arr.test = ':-)';
//  console.log(arr);


//  const fn = function(){};

//  console.log(typeof fn);

//  fn.friend = 'Bob';
//  console.log(fn.friend);



/*
 * Методы объекта и this при обращении к свойствам в методах
 */

// const hotel = {
//     name: "Holiday In",
//     stars: 5,
//     capacity: 100,
//     guests: 35,
//     changeName(newName){
//         this.name = newName;
//         this.someMethod();
//     },
//     someMethod(){
//       console.log('Hello!!!');
//     }
//   };

//   console.table(hotel);

//   hotel.changeName('Residents');
//   hotel.someMethod();

  // const changeHotelName = function(hotelObj, newName) {
  //   hotelObj.name = newName;
  // };

  // changeHotelName(hotel, 'Grand');


  // console.table(hotel);



/*
 * Перебор объекта через for ... in и Object.keys|.values|.entries
 */
// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };

// console.table(feedback);

// let total = 0;

// for (const key in feedback) {
//   console.log(key); // key = 'good'
//   console.log(feedback[key]);

//   total += feedback[key];
// }

// Массив ключей 
// const keys = Object.keys(feedback);

// console.log(keys.length);

// console.log(keys);
// for(const key of keys) {
//   console.log(feedback[key]);
//   total += feedback[key];
// }

// const values = Object.values(feedback);
// console.log(values);
// for(const value of values){
//   total += value;
// }

// const entries = Object.entries(feedback);
// console.log(entries);

// console.table(feedback);

// console.log('Total :', total);



