// class Shape {
//   area() {}
// }

// class Square extends Shape {}

//practice

const Person = class {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instant method
  //methods will be added to .prototype property

  calcAge() {
    console.log(2050 - this.birthYear);
  }

  greet() {
    console.log(`hi ${this.firstName}`);
  }

  get age() {
    return 2050 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a fullName`);
  }

  // static method
  static hey() {
    console.log("hey 👋");
    console.log(this);
  }
};

const jessica = new Person("Jessica Davis", 1980);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
jessica.greet();
Person.hey();

const isra = new Person("Isra Ibadah", 2020);
console.log(isra);

// const isra = new Person("Isra", 2020);
// console.log(isra);

// const Animal = class {
//   constructor(name, color) {
//     this.name = name;
//     this.color = color;
//   }

//}
//};
// const cow = new Animal("cow", "black");
// console.log(cow);
// const pig = new Animal("piggi", "pink");

// console.log(pig);
// console.log(Animal.prototype); // prototype of newly created objects from the constructor function
// console.log(Animal.__proto__); // special property is __proto__
// console.log(cow.__proto__);
// console.log(cow.__proto__ === Animal.prototype); //true
// console.log(Animal.__proto__ === Animal.prototype); // false
// console.log(Animal.prototype.isPrototypeOf(cow)); //true
// console.log(Animal.prototype.isPrototypeOf(Animal)); //false

// classes are not hoisted
//classes are first class citizens
//classes are executed in strict mode

//getters and setters

// const account = {
//   owner: "shoeba",
//   movements: [200, 560, 908, 349],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);
