
// levels: easy, normal, hard



const saveLevel = () => {

    // key & value - alwaus should be string


    const user = {
        name: 'Vasyl',
        age: 18,
        city: 'Ternopil',
    };

    localStorage.setItem('level', 'hard');
    localStorage.setItem('greeting', 'Hello');

    localStorage.setItem('user', JSON.stringify(user));
    
    console.log('localStorage : ', localStorage);


    // const test = {
    //     key: value,
    // };

    // console.log();
};

// saveLevel();



// const userData = JSON.parse(localStorage.getItem('user'));

// console.log(userData);

console.log('level from LS : ', localStorage.getItem('level'));


// const getUserLevel = () => {
//     if(localStorage.getItem('level')) {
//         console.log('true!!!');

//     }


// };

const level = Boolean(localStorage.getItem('level')) ? localStorage.getItem('level') : 'easy';

console.log('level : ', level);

// localStorage.removeItem('user');
// localStorage.getItem(key);
// localStorage.setItem(key, value);
// localStorage.clear();
