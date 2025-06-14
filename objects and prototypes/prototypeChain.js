// grandParent objec
const grandParent = {
  speak() {
    console.log("Speaking from grandParent");
  },
};

// parent object
const parent = Object.create(grandParent);
parent.walk = function () {
  console.log("Walking from parent");
};

// child parent
const child = Object.create(parent);
child.cry = function () {
  console.log("Crying from child");
};

child.cry();
child.walk();
child.speak();
