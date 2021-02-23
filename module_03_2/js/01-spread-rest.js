/*
    Spread - распыление
*/

// const temperatures = [18, 14, 12, -21, 17, 29];

// console.log(temperatures);
// console.log(...temperatures);

// const minNumber = Math.max(...temperatures);
// const minNumber = Math.min(18, 14, 12, -21, 17, 29);
// console.log(minNumber);

// Math.min();

// concat()

// const newArr = temperatures.concat([1,2,3,4,5]);
// const newArr = [...temperatures, ...[1,2,3,4,5]];
// const newArr = [18, 14, 12, -21, 17, 29, 1, 2, 3, 4, 5];

// console.log(newArr);

// Example with temperature
// const yesterdayTemp = [1, 2, 3, 4];
// const todayTemp = [9, 8, 7, 6];
// const tomorrowTemp = [3, 4, 5, 6, 7];

// const temp = [...yesterdayTemp, ':-)',  ...todayTemp, 'Hello', ...tomorrowTemp];
// console.log(temp);



// spread for obj

// const a = {x: 1, y: 2};
// const b = {x: 4, z: 6, y: 5, g: 7};

// // const c = Object.assign({}, b, a); // 1,2,6 || 1,6,2 || 
// const c = {...a, ...b, k: 9};
// console.log(c);

// const d = {...a};
// console.log(a);
// console.log(d);

// console.log(a === d);

// {
//     x: 4,
//     y: 2,
//     z: 6,
// }

// {
//     x: 1,
//     z: 6, 
//     y: 2,
// }

// Object.assign();

// const fn = function(){};

// fn(...temp);



/*
    REST - сбор (собрать в кучу)
*/ 

const fn = function(...args){
//  arguments
// ...args = 1,2,3
console.log(args);
};

fn(1,2,3);

// REST слева = SPREAD справа