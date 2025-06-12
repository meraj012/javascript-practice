let parent = {
  name: "xyz",
  age: 27,
  add: "abc",
};
let child = {
  contact: "914784xxxx",
};

child.__proto__ = parent;

// hasOwnProperty method checks if an object has a property defined on itself, not inherited from its prototype chain
console.log(parent.hasOwnProperty("age")); // true

// in operator it checks if a property exists anywhere in prototype chain
console.log("age" in child); // true
