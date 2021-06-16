// /*
// * Прототип объекта
// * Object.create()
// * [[Prototype]], __proto__
// */


// // const baseSalary = 30000;
// // const rate = 3;
// // const overtime = 10;

// // const getWage = (salary, rate, overtime) => {
// //     return salary + rate * overtime;
// // }

// // console.log(getWage(baseSalary, rate, overtime));

// // const employee = {
// //     baseSalary: 30000,
// //     rate: 3,
// //     overtime: 10,
// //     getWage() {
// //         return this.baseSalary + this.rate * this.overtime;
// //     }
// // }

// // console.log(employee.getWage());


// // const objA = {
// //     x: 1,
// //     y: 2,
// // };

// const objB = {
//     z: 10,
// };

// const objA = Object.create(objB);

// objA.x = 1;
// objA.y = 2;
// objA.t = 5;

// console.dir(objA);
// console.log(objA);

// console.log(objA.z);


// const objC = Object.create(objA);

// console.log(objC);

// objA.k = 8;

// console.log(objC.x)
// console.log(objC.y)
// console.log(objC.z)


// const objD = Object.create(objA);

// console.log(objD);

// // const test = {}; // Object.create(Object)

// const x = {}; // Object

// console.log(x);

// /**
//  * Правило поиска свойств в цепочке прототипов
//  */



const en = {
    name: 'Vadym',
    menu: {
        title: '',
        subtitle: '',
        contacts: '',
        aboutUs: '',
        home: '',

    }
}

const ua = {
    name: 'Вадим',
}

const ru = {
    name: 'Вадым',
}

const refs = {
    en: document.querySelector('#en'),
    ru: document.querySelector('#ru'),
    ua: document.querySelector('#ua'),
    name: document.querySelector('.js-name'),
}

refs.en.addEventListener('click', getLanguage);
refs.ua.addEventListener('click', getLanguage);
refs.ru.addEventListener('click', getLanguage);

refs.name.textContent = JSON.parse(localStorage.getItem('language')).name;

function getLanguage (event) {

    if (event.target.id === 'en') {
        localStorage.setItem('language', JSON.stringify(en));
    } else if (event.target.id === 'ua') {
        localStorage.setItem('language', JSON.stringify(ua));
    }


    refs.name.textContent = JSON.parse(localStorage.getItem('language')).name;
}


const cards = [
    {
        name: '',
        desc: '',
        prior: '',
    },
    {
        name: '',
        desc: '',
        prior: '',
    },
    {
        name: '',
        desc: '',
        prior: '',
    },
];




// 1. написать функцию которая будет по клику на кнопку щаписывать в localStor мову
// 2.  