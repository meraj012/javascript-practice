/* ----------Creating Objects-------------
There are diffrent ways of creating objects :-*/

//using object littlerals
const obj1 = {
  name: "Meraj",
  add: "abc",
  greet: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

// using new Object syntax
const obj2 = new Object();
obj2.name = "Meraj";
obj2.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

// using Object.create()
const obj3 = Object.create(obj1);
obj3.greet();

// using cunstructor function
// using factory function
// using ES6 class

/*---------- Accessing properties ----------*/

// dot notation
console.log(obj1.name);
console.log(obj1.greet());

// bracket notation
console.log(obj1["name"]);
console.log(obj1["greet"]());

/*---------- Modifying properties ----------*/

obj1.name = "xyz";
obj1["name"] = "xyz";

/*---------- Adding new properties ----------*/

obj1.age = 25;
obj1["age"] = 25;

/*---------- Deleting properties ----------*/

delete obj1.age;
delete obj1["age"];
