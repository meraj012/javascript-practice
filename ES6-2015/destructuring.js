// array destructuring
let numbers = [1, 3, 5, 7];

let [a, b, , c] = numbers;
console.log(a, b, c); // 1 3 7

// object destructring
let person = {
  name: "aman",
  age: 28,
};

let { name, age } = person;
console.log(name, age);
