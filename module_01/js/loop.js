

// for (объявление переменной; условие; действие) {

// }

// console.log('before');

// for (let count = 0; count < 5; count += 1) {
//     console.log(count);
// }

// console.log('after');

//  Введите число 
//  посчитать сумму всех составляющих данного числа



// for (создаем переменную (счетчик); условие, если оно true; увеличение счетчика) {
//     тело цикла - то что должно произойти если условие true
// }

// let count;
// count = count + 1;  // count += 1

// for (let i = 0; i <= 7; i += 1) {
//     console.log(i);
// }

// const number = prompt('Введите любое число: ');
// let total = 0;

// for (let i = 1; i <= number; i += 1) {
//     total += i;
// }



// console.log(`Total number ${total}`);





// while () {}

// const number = 5;
// let i = 7;
// let total = 0;

// while (i <= number) {
//    total += i;

//    i += 1;     
// }

// console.log(`Total number ${total}`);

// let number = prompt('Type number 5');

// while (number !== 5) {
//     // number = prompt('Type number 5');
//     console.log(number);
// }

// let number;
// console.log('before');

// do {
//   number = prompt('Type number 5');
//   number = Number(number);
//   console.log(number);

//   if (number === 5) {
//       console.log('Выходим из цикла....');
//       break;
//       console.log('Уже вышли!!!');
//   }

//   console.log('Hello!');

// } while (true);

// console.log('after');


// Четные цифры 2, 4, 6 (парні )

// let number = 10;

// for (let i = 1; i <= number; i += 1) {

    // if (i % 2 === 0) {
    //     continue;
    // }

    // console.log( i);

    // if (i % 2 === 1) {
    //     console.log('Непарні :', i);
    // }

// }









// Task

// Напиши скрипт який просить відвідувача ввести число в prompt до тих пір, поки відвідувач не натисне Cancel і кожен раз додає введене значення до загальної суми.

// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення додається до значення змінної total.
// Операція введення числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення натиснувши кнопку Cancel, показати alert з рядком 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не потрібно. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було написано не число, спробуйте ще раз', при цьому результат prompt плюсувати до загальної суми не потрібно, після чого знову користувачеві пропонується ввести число в prompt.


// 1. Переменная импут 
// 2. Нужен цикл
// 3. При Cancel - выйти из цикла
// 4. Все введенное в промпт сложить в одну сумму
// 5. Нужна консоль с общей суммой чисел после цикла
// 6. Прорверить на число, если число то складывать сумму, если не число то пропустить

let input;
let total = 0; // 0

while (true) {
    input = prompt('Введите число :');

    if (input === null) {
        break;
    }

    input = Number(input); // null = Number(null) = 0

    if (Number.isNaN(input)) {
        console.log('Вы ввели не число, а буквы!!!');
        continue;
    }

    total += input; // total = 5 + 5

    console.log(input);

};


// for (let i = 1; i > 0; i =+ 1 )


console.log(`Загальна сума чисел дорівнює ${total}`);