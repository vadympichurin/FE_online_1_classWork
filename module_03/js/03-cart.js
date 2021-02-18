/*
Работаем с коллекцией товаров в корзине:
- getItems(); - получить все предметы которые лежат в корзине
- add(product); - добавить предмет в корзину
- remove(productName); - удалить элеиент из корзины
- clear(); - очистить всю корзину
- countTotalPrice(); - посчитать общую сумму всех товаров
- increaseQuantity(productName); - 
- decreaseQuantity(productName);
*/

/*
{ name: '🍎', price: 30 }
{ name: '🍋', price: 70 }
{ name: '🍒', price: 90 }
{ name: '🥝', price: 60 }
*/

const cart = {
    items: [
      { name: '🍎', price: 30, quantity: 1 }, 
      { name: '🍋', price: 70, quantity: 1 },
    ],
    getItems(){
        return this.items;
    },
    add(product){
        for(const item of this.items){
            if(item.name === product.name){
                item.quantity += 1;
                return;
            }
        }

        product.quantity = 1;
        this.items.push(product);
    },
    remove(productName){
        for(let i = 0; i < this.items.length; i += 1){
            const item = this.items[i];

            if (item.name === productName){
                this.items.splice(i, 1);
                return;
            }
        }
    },
    clear(){
        this.items = [];
    },
    countTotalPrice(){
        let total = 0;
        for(const item of this.items){
            total += item.price * item.quantity
        }
        return total;
    },
    increaseQuantity(productName){
        for(const item of this.items){
            if (item.name === productName){
                item.quantity += 1;
                return;
            }
        }
    },
    decreaseQuantity(productName){
        for(const item of this.items){
            if(item.name === productName){
                if(item.quantity - 1 === 0){
                    this.remove(productName);
                    return;
                }

                item.quantity -= 1;
                return;
            }
        }
    },
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 30 });
cart.add({ name: '🥝', price: 60 });
cart.add({ name: '🥝', price: 60 });
cart.add({ name: '🥝', price: 60 });

// cart.add({ name: '🍎', price: 30 });


console.table(cart.getItems());

// cart.remove('🍎');
// cart.clear();

cart.increaseQuantity('🍎');
cart.decreaseQuantity('🍎');
cart.decreaseQuantity('🍎');
cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');
// cart.decreaseQuantity('🍎');

console.log(cart.countTotalPrice()); 
console.table(cart.getItems());
