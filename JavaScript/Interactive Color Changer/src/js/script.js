// Wait until the full HTML DOM is loaded before running any JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // Select the box and the button by their IDs
  const colorBox = document.getElementById("color-box");
  const button = document.getElementById("change-color-btn");

  //   Function to generate a random hex color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    // const colours = "red green blue yellow orange purple pink brown black white gray".split(" ");
    let color = "#";
    for (let i = 0; i < 6; i++) {
      // ++ increments the value of i by 1 each time the loop runs
      color += letters[Math.floor(Math.random() * 16)];
    }

    console.log(color);
    return color;
  }
  // Call the function to generate a random color
  // getRandomColor(); 
  
  // When button is clicked, change the background color of the box
  button.addEventListener("click", function () {
    const randomColor = getRandomColor(); // Get a random color
    message.textContent = `Color has changed to ${randomColor}`; // 
    
    // Update the message
    colorBox.style.backgroundColor = randomColor; // Apply it to the box
    const message = document.getElementById("message");
  });
});
// This code listens for the DOM to be fully loaded, then sets up an event listener on the button that changes the background color of the box to a random color when clicked.
