const person = {
  name: "Meraj",
  city: "Patna",
};

// Object.keys(obj)   // returns an array of keys from the object
console.log(Object.keys(person));

// Object.values(obj)  // returns an array of values from the object
console.log(Object.values(person));

// Object.entries(obj)  // returns an array of key value pairs
console.log(Object.entries(person));

// Object.assign(target, ...sources)  // copies properties from one or meore source ojects to a target object.
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // {a: 1, b: 2}
console.log(source);
