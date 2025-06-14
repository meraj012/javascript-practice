const user = {
  name: "abc",
  age: 25,
  city: "xyz",
};

// for...in loop //iterate keys in an object
for (let key in user) {
  console.log(key, user[key]);
}

// Object.entries() // return an array of key value pairs
Object.entries(user).forEach(function ([key, value]) {
  console.log(key, value);
});

// Object.keys // returns an array of keys
Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});

// Object.values // returns an array of values
Object.values(user).forEach((value) => {
  console.log(value);
});
