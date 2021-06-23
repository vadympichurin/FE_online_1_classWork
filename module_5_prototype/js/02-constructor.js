/**
 * Основы ООП, класс, объект, интерфейс
 */


const objA = {
    x: 5,
    y: 10,
}

const objB = Object.create(objA);

objB.z = 15;
objB.d = 20;

// console.log('objB : ', objB);

for (const key in objB) {
    if(objB.hasOwnProperty(key)){
        // console.log(key);
    }
}

// console.log(objB.x);
// console.log(objB.hasOwnProperty('z'));


/**============================== */

const Manager = function(name, department, sales){
    this.name = name;
    this.department = department;
    this.sales = sales;
}

Manager.prototype.changeName = function(name){
    this.name = name;
}

Manager.prototype.sell = function(){
    this.sales += 1;
}


const mango = new Manager('Mango', 'Mobile', 10);

console.log(mango);

const poly = new Manager('Poly', 'PC', 5);

console.log(poly);

poly.changeName('PollllYYYYYY');

console.log(poly);

mango.sell();
mango.sell();
mango.sell();
mango.sell();
mango.sell();

console.log(mango);

