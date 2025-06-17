// Function that returns a Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // change to false to see the reject case
      if (success) {
        resolve({ name: "John", age: 30 });
      } else {
        reject("Failed to fetch user data.");
      }
    }, 2000); // simulate 2 seconds delay
  });
}

// Using the Promise
fetchUserData()
  .then((data) => {
    console.log("User data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
