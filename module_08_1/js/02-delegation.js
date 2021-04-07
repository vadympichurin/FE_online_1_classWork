/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика
 */

const container = document.querySelector(".js-container");

container.addEventListener("click", onClick);

function onClick(event) {
  console.log(event.target.textContent);

  if (event.target.nodeName !== "BUTTON") {
    console.log("Кликнули мимо кнопки, ничего не делаем");
    return;
  }

  console.log(event.target.dataset.value);


  const currentActiveButton = event.currentTarget.querySelector(".active");

  if (currentActiveButton) {
    console.log("Уже есть активная кнопка, нужно ее деактивировать!!!");
    currentActiveButton.classList.remove("active");
  }

  const nextActiveButton = event.target;

  if (nextActiveButton === currentActiveButton) {
    currentActiveButton.classList.remove("active");
    return;
  }

  nextActiveButton.classList.add("active");
}



/*
 * Код добавления кнопок
 */
const addBtnRef = document.querySelector('.js-add-btn');

addBtnRef.addEventListener('click', onAddBtnClick);
let BtnCounter = 6;

function onAddBtnClick(){
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = `Кнопка ${BtnCounter}`;

  container.appendChild(btn);
  BtnCounter += 1;
};

