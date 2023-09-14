//data type
const num = <number>122;

//return number from fun
const myFun = (a: number, b: number): number => {
  console.log(a + b);
  return a * b;
};

//type defined with type
type Sum = (a: number, b: number) => number;

const mySum: Sum = (a, b) => {
  return a + b;
};

//arr types
const arr: string[] = ["This is string"];
const arr1: Array<number> = [1, 2, 3, 4]; //second way to defaind array type

//-------------------\\
//js classes

interface IPlayer {
  heigth: number;
  width: number;
}

class Player {
  readonly id: string;
  public heigth;
  private width;
  protected power;
  constructor(heigth: number, width: number, power: number) {
    this.heigth = heigth;
    this.width = width;
    this.power = power;
    this.id = String(Math.random() * 200);
  }

  getWidth = () => {
    return this.width;
  };

  //getar function
  get getMyPower(): number {
    return this.power;
  }

  //seter function
  set setMyPower(value: number) {
    this.power = value;
  }
}

const p1 = new Player(20, 21, 200);

class Player2 extends Player {
  special: boolean;

  constructor(height: number, width: number, power: number, special: boolean) {
    super(height, width, power);

    this.special = special;
  }
}

const p2 = new Player2(20, 30, 40, true);
// console.log((p2.setMyPower = 500));

interface IProduct {
  name: string;
  price: number;
  stock: number;
  offer?: boolean;
  getId: () => string;
}

class Product implements IProduct {
  private readonly id = String(Math.random() * 100 + 1);
  constructor(public name: string, public price: number, public stock: number) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getId = () => {
    return this.id;
  };
}

const product1 = new Product("IPhone 15", 1200, 10);
console.log(product1.name, product1.getId());
