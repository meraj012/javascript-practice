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
const source = { a: 1 };
const target = { b: 2 };
Object.assign(target, source);
console.log(source); // {a: 1}
console.log(target); // {b: 2, a: 1}

// Object.freeze(obj)  // no changes allow, freeze the object
const obj = {
  a: 1,
};
Object.freeze(obj);
obj.b = 2; // can't update

// Object.seal(obj)  // Prevents adding or deleting properties, but allows modifiying existing ones.
Object.seal(obj);
delete obj.a; // not allowed
obj.a = 2; // allowed

// Object.getPrototypeOf(obj)  // returns the prototype of the object
console.log(Object.getPrototypeOf(person));

// Object.hasOwnProperty(property)
