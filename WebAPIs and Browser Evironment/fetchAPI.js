/*
fetch(url)
  .then(response => response.json()) 
  .then(data => {
    // handle the data
  })
  .catch(error => {
    // handle error
  });

  */
// GET request....
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// POST request....
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Data posted:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
