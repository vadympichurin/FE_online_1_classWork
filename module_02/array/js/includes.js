// Проверяем наличие сотрудника на рабочем месте
// сначала через for потом includes

const staff = ['Bob', 'Mango', 'Poly', 'Tony', 'Kiwi'];
const query = 'Poly';
// let message = 'Сотрудника нет на рабочем месте';

console.log('staff : ', staff);

// for (const employee of staff) {
//     if (employee === query) {
//         message = 'Сотрудник на рабочем месте!!!!';
//         break;
//     }
// }


// if (staff.includes(query)) {
//     message = 'Сотрудник на рабочем месте!!!!';
// }

const message = staff.includes(query)
    ? 'Сотрудник на рабочем месте!!!!'
    : 'Сотрудника нет на рабочем месте';

console.log(message);

console.log(staff);