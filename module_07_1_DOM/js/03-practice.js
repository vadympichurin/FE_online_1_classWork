import products from './products.js';

console.log(products);

const createElemntRef = product => {
    const containerRef = document.createElement('div');
    containerRef.classList.add('product');

    const titleRef = document.createElement('h2');
    titleRef.classList.add('product__title', product.available ? 'product__title--available' : 'product__title--not-available');
    titleRef.textContent = product.name;

    const descriptionRef = document.createElement('p');
    descriptionRef.textContent = product.description;
    descriptionRef.classList.add('product__description');

    const priceRef = document.createElement('p');
    priceRef.textContent = `Цена за штуку ${product.price} кредитов`;
    priceRef.classList.add('product__price');

    containerRef.append(titleRef, descriptionRef, priceRef);

    return containerRef;
}

// console.log(createCollection(products[0]));

const collectionRef = products.map(product => createElemntRef(product));

// console.log(collectionRef);

const rootElRef = document.querySelector('#root');

rootElRef.append(...collectionRef);