// Your code goes here
// Set up an event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  // When the DOM is fully loaded, select the paragraph with id="text"
  const paragraph = document.getElementById("text");

  // Update its content
  paragraph.textContent = "This is really cool!";
});

// This console log runs immediately when the JS file loads
console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");
