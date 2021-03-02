/*
*  Замыкание (closure)
*/

/*
    Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

// [[Environment]] = Global env
// const fnA = function(){

/*
    fnA env
    Record: {}
    Parent: Global env
*/

    // const x = 10;

/*
    fnA env
    Record: {x: 10}
    Parent: Global env
*/

    // [[Environment]] = fnA env
    // return function(){
/*
    Annon env
    Record: {}
    Parent: fnA env
*/
        // console.log(x);
//     }
// };

/*
    Global env 
    Record: {fnA: f}
    Parent: null
*/

// const outerFn = fnA();

/*
    Global env 
    Record: {fnA: f, outerFn: f}
    Parent: null
*/

// console.dir(outerFn);

// outerFn();



/*
* Функция для приготовления еды makeDish, makeSheff
*/





// const makeDish = function(chief, dishName){
//     console.log(`${chief} готовит сегодня ${dishName}`);
// }

// makeDish('Mango', 'котлеты');
// makeDish('Mango', 'кофе');
// makeDish('Mango', 'морозиво');

// makeDish('Poly', 'пицца');
// makeDish('Poly', 'суши');
// makeDish('Poly', 'чайок');







/*
    Global env - создается при исполнении файла скрипта
    Record: {}
    Parent: null
*/

/*
    [[Environment]] = Global env 
*/
const makeChief = function(name){
/*
    makeChief env
    Record: {name: 'Mango'}
    Parent: Global env 
 */



/*
    [[Environment]] = makeChief env 
*/
    return function(dish){
    /*
        Annon env
        Record: {dish: 'котлеты'}
        Parent: makeChief env 
    */
        console.log(`${name} готовит сегодня ${dish}`);
    }
}


/*
    Global env 
    Record: {makeChief: f}
    Parent: null
*/

const mango = makeChief('Mango');
/*
    Global env 
    Record: {makeChief: f, mango: f}
    Parent: null
*/


const poly = makeChief('Poly');


// mango('котлеты');
// mango('кофе');
// mango('морозиво');


// poly('чайок');
// poly('пицца');
// poly('суши');

// mango('бутер');

// console.log(mango);



const a = function(a){
    return function(b){
        return function(c){
            return console.log(a,b,c);
        }
    }
}


const test1 = a(5)(25);

test1('oiugyf');
test1('qwerty');
test1(45678);

