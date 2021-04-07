/*
 * Всплытие событий
 * event.target - целевой (исходный) элемент
 * event.currentTarget - текущий элемент, на слушателе которого поймали событие
 */

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
  };

  // const parentRef = document.querySelector('#parent');
  
  refs.parent.addEventListener('click', onParentClick);
  refs.child.addEventListener('click', onChildClick);
  refs.innerChild.addEventListener('click', onInnerChildClick);
  // window.addEventListener('click', ()=> {console.log('WINDOW')});
  
  function onParentClick(event) {
    console.log('PARENT event');
    console.log('PARENT event.target', event.target);
    console.log('PARENT event.currentTarget', event.currentTarget);
  }
  
  function onChildClick(event) {
    console.log('CHILD event');
    console.log('CHILD event.target', event.target);
    console.log('CHILD event.currentTarget', event.currentTarget);
    
    event.stopPropagation();
  }
  
  function onInnerChildClick(event) {
    console.log('INNER_CHILD event');
    console.log('INNER_CHILD event.target', event.target);
    console.log('INNER_CHILD event.currentTarget', event.currentTarget);
  }

