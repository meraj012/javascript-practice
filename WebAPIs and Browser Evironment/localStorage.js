// Save data
localStorage.setItem("username", "Meraj");

// Retrieve data
const user = localStorage.getItem("username");
console.log("Username from localStorage:", user);

// Remove data
localStorage.removeItem("username");
