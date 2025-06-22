async function fetchUserData(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) throw new Error("Failed to fetch user");
    const user = await response.json();
    console.log("User data:", user);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//fetchUserData(1);

// using async await with setTimeout simulating delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function showMessages() {
  console.log("Message 1");
  await wait(2000); // wait for 2 seconds
  console.log("Message 2 after 2 seconds");
}

//showMessages();

// calling multiple apis (await in sequence)
async function loadData() {
  try {
    const postResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const post = await postResponse.json();
    console.log("Post:", post);

    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await userResponse.json();
    console.log("User:", user);
  } catch (err) {
    console.error("Error loading data:", err.message);
  }
}
loadData();
