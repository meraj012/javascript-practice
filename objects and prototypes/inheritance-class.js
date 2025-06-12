// Superclass
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Subclass
class dog extends Animal {
  constructor(name, bread) {
    super(name);
    this.bread = bread;
  }
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let myDog = new dog("Sheru", "Golden Retriever");
myDog.speak();
