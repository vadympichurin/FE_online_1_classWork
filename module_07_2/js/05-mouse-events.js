/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', event => {
    // console.dir(event.target);
    console.log('Над внешним дивом!');
    boxRef.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', event => {
    console.log(' Покинул территорию');
    boxRef.classList.remove('box--active');
})

// boxRef.addEventListener('mousemove', event => {
//     console.log(event);
// })

boxRef.addEventListener('click', () => {
    console.log('Click in blue box');
})