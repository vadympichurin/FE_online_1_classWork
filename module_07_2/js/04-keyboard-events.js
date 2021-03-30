/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */


const outputRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.js-clear');

window.addEventListener('keypress', event => {
    // console.log('event.key : ', event.key);
    // console.log('event.code :', event.code);

    // console.dir(event);

    outputRef.textContent += event.key;
});

clearBtnRef.addEventListener('click', () => {
    outputRef.textContent = '';
})