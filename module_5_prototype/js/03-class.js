

const Hero = function (name, xp, hp, type){
    this.name = name;
    this.xp = xp;
    this.hp = hp;
    this.type = type;
}

Hero.prototype.healing = function(){
    this.hp += 20;
}

Hero.prototype.changeName = function(name){
    this.name = name;
}

Hero.description = "This is a hero";

Hero.showStats = function (hero) {
    console.log('Static information', hero);
}

console.dir(Hero);

// console.log(Math.pow(2,5));
// console.log(Math.PI);

const palladin = new Hero('Mango', 1000, 55, 'warrior');

console.log(palladin);

palladin.healing();
palladin.changeName('Poly');

console.log(palladin);

// palladin.showStats();
Hero.showStats(palladin);


// ES6 Class

class Mage {
    static description = "This is a mage";
    static showStats(hero){
        console.log('Statistic info from Mage ', hero);
    }

    constructor(name, xp, hp, type){
        this.warName = name;
        this.xp = xp;
        this.hp = hp;
        this.type = type;
    }

    healing(){
        this.hp += 20;
    }

    changeName (name) {
        this.name = name;
    }

    get name (){
        return this.warName;
    }

    set name(value){
        this.warName = value;
    }
}

console.dir(Mage);

const witcher = new Mage('Gerald', 200000, 64, 'mage');

console.log(witcher);

witcher.healing();

console.log(witcher);

Mage.showStats(palladin);
Mage.showStats(witcher);

console.log(witcher.name);

witcher.name = 'PPPPPOOhxjdvgsvdgu';

console.log(witcher.name);

