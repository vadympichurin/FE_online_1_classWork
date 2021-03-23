/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */


const inputRef = document.querySelector('.js-input');
const registrationBtnRef = document.querySelector('.js-button');
const btnLabelRef = document.querySelector('.js-button > span');
const licenseBtnRef = document.querySelector('.js-license');

const handleInputFocus = () => {console.log('Получил фокус!')};
const handkeInputBlur = () => {console.log('Потерял фокус!')}
const handleInputChange = (event) => {
    btnLabelRef.textContent = `${event.target.value}`;
};
const handleCheckBoxChange = (event) => {
    registrationBtnRef.disabled = !event.target.checked;
};

inputRef.addEventListener('focus', handleInputFocus);
inputRef.addEventListener('blur', handkeInputBlur);
inputRef.addEventListener('input', handleInputChange);
licenseBtnRef.addEventListener('change', handleCheckBoxChange);