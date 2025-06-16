let count = 1;

let intervalId = setInterval(() => {
  console.log("Count: " + count);
  count++;

  // Stop after 5 counts
  if (count > 5) {
    clearInterval(intervalId);

    console.log("Stopped counting.");
  }
}, 1000); // runs every 1000 ms (1 second)
