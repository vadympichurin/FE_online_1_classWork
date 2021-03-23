/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formRef = document.querySelector('.js-register-form');

formRef.addEventListener('submit', event => {
    event.preventDefault();

    console.log('onSubmit form');

    // console.dir(event.target.elements);

    const formRef = event.target;
    console.dir(formRef);
    const formData = new FormData(formRef);

    console.log(formData);

    const submittedData = {};

    formData.forEach((value, key) => {
        // console.log('value : ', value);
        // console.log('key : ', key);
        submittedData[key] = value;
    });


console.log(submittedData);

});


// {
//     name: 'Mango',
//     email: 'mango@mail.com',
//     password: 'sdfgh',
//     subscription: 'Basic',
// }