// factory function
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    },
  };
}

const p1 = createPerson("ABC", 18);
console.log(p1);
p1.greet();
