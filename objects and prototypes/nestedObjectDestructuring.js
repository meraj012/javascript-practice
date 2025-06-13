// A nested object representing a student profile
const student = {
  name: "abc",
  age: 18,
  course: "MERN Stack",
  address: {
    street: "Gandhi Road",
    city: "Buxar",
    state: "Bihar",
    country: "India",
  },
  contact: {
    email: "abc@example.com",
    phone: {
      personal: "987654XXXX",
      emergency: "912345XXXX",
    },
  },
};

// Destructuring nested properties from the object
const {
  name,
  age,
  course,

  // Nested destructuring from address
  address: { street, city, state, country },

  // Nested destructuring from contact and phone
  contact: {
    email,
    phone: { personal, emergency },
  },
} = student;

// Now let's print the values to see the result
console.log("Name:", name);
console.log("Age:", age);
console.log("Course:", course);

console.log("Street:", street);
console.log("City:", city);
console.log("State:", state);
console.log("Country:", country);

console.log("Email:", email);
console.log("Personal Phone:", personal);
console.log("Emergency Phone:", emergency);
