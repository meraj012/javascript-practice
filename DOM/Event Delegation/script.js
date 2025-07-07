const list = document.getElementById("itemList");

// Event delegation: Attach event to parent
list.addEventListener("click", function (event) {
  // Check if clicked element is an <li>
  if (event.target && event.target.nodeName === "LI") {
    alert("You clicked: " + event.target.textContent);
  }
});
