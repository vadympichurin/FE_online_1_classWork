/*
* Функция обратного вызова (callback) и функция высшего порядка (hof - high order function)
*/ 

const greet = function(name){
    console.log(`Hello ${name}`);
}


const a = 4;
const b = 'dfvgbhnj';

const greetWithName = function(callback){
    const name = 'Mango';

    console.log(callback);

    return callback(name);
};

greetWithName(greet);




/*
* Отложеный вызов: регистрация событий
*/ 

const clickMe = function(){
    console.log('Click!!!');
}

const buttonRef = document.querySelector('button');
buttonRef.addEventListener('click', clickMe);



/*
* Отложеный вызов: интервалы
*/ 

// const grreting = function(){
//     console.log('через три секунды внутри колбека в таймауте');
// }

// console.log('в коде перед таймаутом');

// setTimeout(grreting, 4000);

// console.log('В коде после таймаута');


/*
* Отложенный вызов: http запрос
*/ 

console.log('Before fetch');

fetch('https://swapi.dev/api/people/1/')
.then(res => res.json())
.then(function(data){
    
    console.log(data);
});

console.log('After fetch');
