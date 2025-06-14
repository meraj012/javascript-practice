let person = {
  name: "Meraj",
  city: "Patna",
  contact: {
    email: {
      mailId1: "abc@gmail.com",
      mailId2: "xyz@gmail.com",
    },
    phone: {
      contactNum1: "917683XXXX",
      contactNum2: "846868XXXX",
    },
  },
};

const person2 = person; // person2  points the refference of person

const person3 = { ...person }; // Shallow copy of person
person3.contact.phone.contactNum2 = "620868XXXX"; // update in person as well
console.log(person);
console.log(person3);

const person4 = Object.assign(person); // Shallow copy op person
console.log(person4);

const person5 = JSON.parse(JSON.stringify(person)); // Deep copy of person object
person5.contact.email.mailId1 = "meraj@gmail.com"; // only chnge in person5 object
console.log(person);
console.log(person5);
