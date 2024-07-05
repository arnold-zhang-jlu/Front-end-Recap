"use strcit";
//Constructor Function and the new operator
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  /**
   * 在构造函数中添加方法不是一个好的选择
   * 因为这会让我们用该构造函数创建的每一个对象实例*都有该方法。好的解决方式是是用原型继承。
   */
  // this.calcAge = function () {
  //   return 2024 - this.birthYear;
  // };
};

const jonas = new Person("Jonas", "2001");
const matilda = new Person("Matilda", 2017);
//console.log(jonas);
//console.log(jonas instanceof Person);
//静态方法
Person.hey = function () {
  //console.log("Hey there 😉");
  //console.log(this);
};
Person.hey();

//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
//isPrototypeOf 是 JavaScript 中用于检查一个对象是否是另一个对象的原型的方法。
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));
// console.log(Object.prototype.isPrototypeOf(Person));

// .prototyeOfLinkedObjects

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
///////////////////////////////////////
// Prototypal Inheritance on Built-In Objects
console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);
// console.log(Person);
console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__ === Object.prototype);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir((x) => x + 1);

// const PersonC1 = class {};

class PersonC1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {}
}
