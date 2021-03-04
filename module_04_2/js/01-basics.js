/*
* Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
*/

// console.log('[] === [] : ', [] === []);
// console.log('{} === {} : ', {} === {});
// console.log('function(){} === function() {} : ', function(){} === function() {});

// const fnA = function() {
//     console.log('hello');
// };

// const fnB = fnA;

// console.log('fnB === fnA : ', fnB === fnA);

// =============================================
/*
* Контекст (this)
*   - где и как была объявлена фукция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст;
*   - Контекст определяется в МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно;
*/ 

/* ==============================
* Как метод объекта. B контектсе объекта
*/ 

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log('this : ', this);
//         console.log('this.tag : ', this.tag);
//     },
// };

// user.showTag();

/* ================================
* Вызов без контекста
*/ 

// const foo = function(){
//     console.log('this : ', this);
// };

// foo();

/* =================================
* Как метод объекта, но объявлена как внешняя функция. В контектсе объекта.
*/ 

// const showTag = function(){
//     console.log('this : ', this);
//     console.log('this.tag : ', this.tag);
// };

// const user = {
//     tag: 'Mango',
// };

// user.show = showTag;
// user.show();

// showTag();


/* =================================
* Вызов без контекста, но объявлена как метод объекта
*/ 

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log('this : ', this);
//         console.log('this.tag : ', this.tag);
//     },
// };

// const hotel = {
//     name: 'Summer',
// }

// hotel.show = user.showTag;

// hotel.show();

// user.showTag();

// const outerFn = user.showTag;

// outerFn();

/* ==========================
* Контекст в callback функциях
*/ 

// const user = {
//     tag: 'Mango',
//     showTag(){
//         console.log('this : ', this);
//         console.log('this.tag : ', this.tag);
//     },
// };

// const invokeAction = function(obj, action) {
//     console.log('action : ', action);

    

//     // obj.show = action;
//     // obj.show();

//     action();
// };

// const hotel = {
//     tag: 'Holiday',
// };

// invokeAction(hotel, user.showTag);


/* ===============
*   Task 1 = 2 min
 */ 

//  const makeChangeColor = function(){
//      const changeColor = function(color){
//          console.log('this : ', this);
//          this.color = color;
//      };

//      const sweater = {
//          color: 'teal',
//      };

//      sweater.changeColor = changeColor;

//     /*
//     const sweater = {
//          color: 'teal',
//          changeColor(color){
//              this.color = color;
//          },
//      };
//     */  

//      return sweater.changeColor;
//  };


//  const changeColor = makeChangeColor(); // sweater.changeColor

//  changeColor('blue');

/* ===========================
 *  Task 2 = 2 min
*/ 

// const makeChangeColor = function(){
//     const changeColor = function(color){
//         console.log('this  :', this);
//         this.color = color;
//     };

//     return changeColor;
// };

// const hat = {
//     color: 'blue',
//     changeColor: makeChangeColor(),
// };

// hat.changeColor('tomato');

// console.log(hat);