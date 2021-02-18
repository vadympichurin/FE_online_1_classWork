// Работаем с карточкамі трелло
// Удалить карточку
// Добавить новую

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
console.log(cards);

// const card = 'card-3';
// const index = cards.indexOf(card);
// const delCard = cards.splice(index, 1);

// console.log(cards);

const removeCard = function (array, removedCard) {
  const index = array.indexOf(removedCard); // -1

  if (index === -1) {
    console.log("Такой карточки нет !!!");
    return;
  } 
  

  array.splice(index, 1);

};

const addNewCard = function (array, newCard, index) {
  array.splice(index, 0, newCard);
};

addNewCard(cards, "card-133", 2);

// console.log(removeCard(cards, 'card-3'));

console.log(cards);

// console.log(removeCard(cards, 'card-5'));

// console.log(cards);

// console.log(removeCard(cards, 'card-9'));

// console.log(cards);
