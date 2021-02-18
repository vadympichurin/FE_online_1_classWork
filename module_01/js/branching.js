// 1 Баланс на счету пользователя if .... else

// const balance = 10000;
// let payment = 2000;
// let discount = 0;
// let totalExpenses = 10000; // сколько всего потрачено кредитов

// 100 - 1000 - 5000 - 10000
// 0 - 5 - 10 - 15 - 20 %

// totalExpenses = totalExpenses + payment;

// if (totalExpenses >= 100 && totalExpenses < 1000) {
//     discount = 5;
//     console.log(`Ваша скидка  = ${discount}%`);
// } else if (totalExpenses >= 1000 && totalExpenses < 5000) {
//     discount =10;
//     console.log(`Ваша скидка  = ${discount}%`);
// } else if (totalExpenses >= 5000 && totalExpenses < 10000) {
//     discount =15;
//     console.log(`Ваша скидка  = ${discount}%`);
// } else if (totalExpenses >= 10000 && totalExpenses < 15000) {
//     discount =20;
//     console.log(`Ваша скидка  = ${discount}%`);
// } else {
//     console.log('У вас еще нет скидки');
// }

// totalExpenses += payment;

// payment = payment - payment / 100 * discount;

// console.log(totalExpenses);
// console.log(`Сумма вашей покупки с учетом скидки ${discount}% составляет ${payment} кредитов`);

// console.log(`Общая стоимость заказов ${payment} кредитов. Проверяем количество доступных средств на счету.`);

// if(balance >= payment) {
//     console.log(`Все хорошо! Снимаем деньги. На вашем счету осталось ${balance - payment} кредитов.`)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }

// Messages
// Общая стоимость заказов ХХХ кредитов. Проверяем количество доступных средств на счету.
// Все хорошо! Снимаем деньги. На вашем счету осталось ХХХ кредитов.
// На счету недостаточно средств для проведения операции!

// if .... else if...
// 1 скидка ))
// 2 учесть текущую скидку при покупке

// const totalExpenses = 20000;
// const discount = 0;

// Область видимости

// const age = 15;

// if (true) {
//     const userName = 'Mango';
//     console.log('age in IF : ', age);
//     console.log(userName);

//     if (true) {
//         const userCar = 'BMW';
//         console.log(userCar);
//         console.log(userName);
//         console.log(age);
//     }
// }

// console.log(userName);

// console.log(age);

// Тернарный оператор
// const age = 25;
// const controlAge = 18;
// let type;

// if (age >= controlAge) {
//     type = 'Adult';
// } else {
//     type = 'Child';
// }

// const type = age >= controlAge ? 'adult' : 'child';

// console.log(type);

//  switch () {
// case
// }

let userInput = prompt('Введите число :');
userInput = Number(userInput);
console.log(userInput);
// let userPayment = prompt('Введите число');
// userPayment = Number(userPayment);

// 100 - 1
// 500 - 2,3,4
// 1000 - 5

let seaDistance;

switch (userInput) {
  case 1: {
    console.log(`Стоимость 100$`);
    seaDistance = 500;
    break;
  }
  case 2:
  case 3:
  case 4: {
    console.log(`Стоимость 500$`);
    seaDistance = 200;
    break;
  }

  case 5: {
    console.log(`Стоимость 1000$`);
    seaDistance = 10;
    break;
  }
  default:
    console.log('Вы ничего не выбрали или такого отеля нет!');
}

if (seaDistance) {
    console.log(`Расстояние до моря = ${seaDistance} м`);
}

// if (userInput === 1) {
//     console.log(`Вы выбрали 1-o звездочный отель`);
// } else if (userInput === 2) {
//     console.log(`Вы выбрали 2-x звездочный отель`);
// } else if (userInput === 3) {
//     console.log(`Вы выбрали 3-x звездочный отель`);
// } else if (userInput === 4) {
//     console.log(`Вы выбрали 4-x звездочный отель`);
// } else if (userInput === 5) {
//     console.log(`Вы выбрали 5-x звездочный отель`);
// } else {
//     console.log('Такого отеля нет!');
// }

// switch (userInput) {
//     case 1: {
//         console.log(`Вы выбрали 1-o звездочный отель`);
//         break;
//     }
//     case 2: {
//         console.log(`Вы выбрали 2-x звездочный отель`);
//         break;
//     }
//     case 3:
//         console.log(`Вы выбрали 3-x звездочный отель`);
//         break;

//     case 4: {
//         console.log(`Вы выбрали 4-x звездочный отель`);
//         break;
//     }
//     case 5: {
//         console.log(`Вы выбрали 5-и звездочный отель`);
//         break;
//     }
//     default: console.log('Такого отеля нет!');
// }

// const userStatus = 'free';

// switch (userStatus) {

//     case 'VIP':
//     console.log('VIP');
//     break;

//     case 'pro':
//         console.log('PRO');
//         break;

//     case 'free':
//     console.log('FREE');
//     break;

//     default: console.log('Вы у нас впервые');
// }
