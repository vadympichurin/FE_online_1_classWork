// 1 Числовой отрезок

const minAge = 10;
const maxAge = 30;

const userAge = 86;

// const result = userAge > minAge && userAge < maxAge;
// false
// const result = 5 && 'null' && 15 && 20 && 25;
// true && false => 0

// const result = 0 || 9 || 0 || null;
// false || true => 10

// const result = (userAge < minAge && userAge > maxAge) || userAge > maxAge;
// (rtue && false) => false || true

// console.log(result);

// 2 Возможность отрыть живой чат, online & dnd

// const isOnline = true;
// const isFriend = false;
// const isDnD = true;

// если онлайн и если он мой друг
// const canOpenChat = isOnline && isFriend;

// если ондайн, друг , и его можно беспокоить
// const canOpenChat = (isFriend || isOnline ) && !isDnD;
// (true) && true
//true && true && false => true = true

// console.log('Can I open chat :', canOpenChat);

// 3 Проверка подписки юзера для доступа к контенту

// free, pro, vip

const userStatus = 'pro';

const result = userStatus === 'vip' || userStatus === 'pro';

console.log(result);

// Number , NaN - Not A Number

//  0, NaN, false, undefined, null, '' (пустая строка)
// console.log(Boolean(''));

// && => первый false или последний true;

//  || => первый true или последний false;
