// Accessing elements
const title = document.getElementById("main-title");
const paragraph = document.querySelector(".message");

// Manipulating content
function changeContent() {
  title.textContent = "Title Changed!";
  paragraph.innerHTML = "<strong>Paragraph has been updated.</strong>";
  document.body.style.backgroundColor = "#f0f0f0"; // Change background
}
