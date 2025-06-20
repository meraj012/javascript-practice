function validateNumber(number) {
  if (typeof number != "number") {
    throw new TypeError("Invalid type: Expected a number");
    return number;
  }
}

try {
  validateNumber("xyx"); // output: Invalid type: Expected a number
  validateNumber(101); //
} catch (error) {
  console.log(error.message);
}
