// parent object
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks.");
  },
};

// child object
const dog = {
  bark() {
    console.log("Dog barks.");
  },
};

// inherit from animal
dog.__proto__ = animal;
// Object.setPrototypeOf(dog, animal) // Modern way to set prototype
// accessing properties and methods
console.log(dog.eats);
dog.walk();
dog.bark();
