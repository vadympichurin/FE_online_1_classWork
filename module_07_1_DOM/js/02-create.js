// import products from './products.js';

// console.log(products);


// const parentRef = document.createElement('div');
// parentRef.classList.add('parent');

// const imageRef = document.createElement('img');
// imageRef.setAttribute('src', 'https://i.pravatar.cc/200?img=3');
// imageRef.setAttribute('alt', 'my image');

// console.log(imageRef);
// console.log(parentRef);




const product = {
    name: 'Генератор',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus accusamus molestiae illum maxime ea accusantium tenetur, sapiente ipsam enim sit.',
    price: 2000,
    available: true,
};

{/* <div>
        <h2>Генератор</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos reiciendis tempora quas commodi laborum quam sint iste nostrum enim.</p>
        <p>Цена за товар 2000 кредитов</p>
    </div> */}


    const containerRef = document.createElement('div');
    containerRef.classList.add('product');
    console.log(containerRef);

    const titleRef = document.createElement('h2');
    titleRef.classList.add('product__title');
    titleRef.textContent = product.name;
    // console.log(titleRef);

    const descriptionRef = document.createElement('p');
    descriptionRef.textContent = product.description;
    descriptionRef.classList.add('product__description');
    // console.log(descriptionRef);

    const priceRef = document.createElement('p');
    priceRef.textContent = `Цена за штуку ${product.price} кредитов`;
    priceRef.classList.add('product__price');
    // console.log(priceRef);

    // containerRef.appendChild(titleRef);
    // containerRef.appendChild(descriptionRef);
    // containerRef.appendChild(priceRef);


    containerRef.append(titleRef, descriptionRef, priceRef);

    const rootElementRef = document.querySelector('#root');

    rootElementRef.appendChild(containerRef);

