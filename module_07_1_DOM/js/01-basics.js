

// console.log(window.document);

const titleRef = document.querySelector('.title');
titleRef.textContent = 'Hello world in js';
titleRef.classList.add('active');

console.dir(titleRef);

const navLinkRef = document.querySelectorAll('.nav__item--link');
// console.log(navLinkRef.parentNode);

// console.dir(navLinkRef);


const imageRef = document.querySelector('.image');
imageRef.src = "https://i.pravatar.cc/200?img=3";

// imageRef.setAttribute('src', 'https://i.pravatar.cc/200?img=4');

imageRef.alt = 'Hello from JS';

console.log(imageRef.alt);

// console.log(imageRef.getAttribute('alt'));

// console.dir(imageRef);






