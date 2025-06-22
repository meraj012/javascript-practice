function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    let result = a / b;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error caught:", error.message);
  } finally {
    console.log("Division attempt finished.");
  }
}
divideNumbers(10, 2); // Output: Result: 5
//         Division attempt finished.
divideNumbers(10, 0); // Output: Error caught: Cannot divide by zero
//        Division attempt finished.

async function fetchUserData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  } finally {
    console.log("Fetch attempt completed.");
  }
}

fetchUserData();
