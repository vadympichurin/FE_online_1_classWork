const cart = {
    items: ['Phone', 'Tablet', 'Laptop'],
    showItems() {
        console.log('this :', this);
        console.log('this.items :', this.items);
    },
};

const cars = {
    items: ['BMW', 'Lada', 'Mazda'],
};


document.querySelector('.js_show_items').addEventListener('click', cart.showItems.bind(cart));

document.querySelector('.js_del_items').addEventListener('click', cart.showItems.bind(cars));