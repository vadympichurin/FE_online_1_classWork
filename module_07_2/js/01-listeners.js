/**
 * События. Создание и удаление слушателей
 * Ссылочная идентичность колбеков
 * Объект события
 */


const btnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');


const onSubjectBtnClick = function(event){
    console.log(event.target);
    console.log('Слушатель работает');
}



addListenerBtnRef.addEventListener('click', (event) => {
    console.dir(event.target);
    console.log('Клик на кнопку Добавления!');
    btnRef.addEventListener('click', onSubjectBtnClick);
});

removeListenerBtnRef.addEventListener('click', () => {
    console.log('Клик на удаление слушателя');
    btnRef.removeEventListener('click', onSubjectBtnClick);
});




