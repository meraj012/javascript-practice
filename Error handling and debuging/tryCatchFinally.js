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
//         Division attempt finished.
