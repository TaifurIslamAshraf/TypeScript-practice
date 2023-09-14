"use strict";
//data type
const num = 122;
//return number from fun
const myFun = (a, b) => {
    console.log(a + b);
    return a * b;
};
const mySum = (a, b) => {
    return a + b;
};
//arr types
const arr = ["This is string"];
const arr1 = [1, 2, 3, 4]; //second way to defaind array type
class Player {
    constructor(heigth, width, power) {
        this.getWidth = () => {
            return this.width;
        };
        this.heigth = heigth;
        this.width = width;
        this.power = power;
        this.id = String(Math.random() * 200);
    }
    //getar function
    get getMyPower() {
        return this.power;
    }
    //seter function
    set setMyPower(value) {
        this.power = value;
    }
}
const p1 = new Player(20, 21, 200);
class Player2 extends Player {
    constructor(height, width, power, special) {
        super(height, width, power);
        this.special = special;
    }
}
const p2 = new Player2(20, 30, 40, true);
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.id = String(Math.random() * 100 + 1);
        this.getId = () => {
            return this.id;
        };
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}
const product1 = new Product("IPhone 15", 1200, 10);
console.log(product1.name, product1.getId());
