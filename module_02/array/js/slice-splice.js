// Работаем с коллекцией карточек в трелло
// удаляем, добавляем, обновить

const cards = ['card-1', 'card-2', 'card-3', 'card-4','card-5'];
const searchCard = 'card-3';
console.log('cards : ', cards);

// удаление элемента
const removedElementIndex = cards.indexOf(searchCard);
// cards.splice(removedElementIndex, 1);

// console.log(removedElementIndex);
// console.log('cards : ', cards);
// доюавление элемента
// cards.splice(2, 0, 'card-10', 'card-12');

// замена элемента
cards.splice(2, 1, 'card-8');

console.log('cards : ', cards);
