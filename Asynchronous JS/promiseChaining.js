// A function that returns a Promise and resolves after 1 second
function getUserId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1: Got User ID");
      resolve(101); // sending user ID
    }, 1000);
  });
}

function getUserDetails(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 2: Got details of User ${userId}`);
      resolve({ userId, name: "John Doe" });
    }, 1000);
  });
}

function getUserPosts(userDetails) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 3: Got posts of ${userDetails.name}`);
      resolve(["Post 1", "Post 2", "Post 3"]);
    }, 1000);
  });
}

// Chaining Promises
getUserId()
  .then((userId) => {
    return getUserDetails(userId);
  })
  .then((userDetails) => {
    return getUserPosts(userDetails);
  })
  .then((posts) => {
    console.log("Step 4: Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
