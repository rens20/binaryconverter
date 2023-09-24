async function convertBinaryToHex() {
    // Get the binary number from the input field.
    var binaryNumber = document.getElementById("binaryInput").value;
    var solutionDiv = document.getElementById("solution");
    // Clear previous solution steps.
    solutionDiv.innerHTML = "";
    // Create a step-by-step solution
    for (var i = 0; i < binaryNumber.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for demonstration purposes.
      var binarySubstring = binaryNumber.substr(0, i + 1);
      var decimalNumber = parseInt(binarySubstring, 2);
      var hexadecimalNumber = decimalNumber.toString(16).toUpperCase();
      var step = `Step ${i + 1}: Convert ${binarySubstring} to hexadecimal: ${binarySubstring} = ${hexadecimalNumber}`;
      solutionDiv.innerHTML += step + "<br>";
      if (i === binaryNumber.length - 1) {
        // Display the final result in the input field.
        document.getElementById("hexOutput").value = hexadecimalNumber;
      }
    }
  }
  /***document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("username")) {
      alert(`Hello human  "${localStorage.getItem("username")}" \nWelcome back.`);
    } else {
      let username = prompt("What is your name?");
      localStorage.setItem("username", username);
    }
}); ***/
const icon = document.getElementById("chat-icon");


icon.addEventListener("click", function() {

});

const modalView = document.getElementById("modalView");

const closeBtn = document.getElementById("modalView__closeBtn");

closeBtn.addEventListener("click", () => {
  modalView.style.display = "none";
});
 const chatIcon = document.getElementById('chat-icon');
 chatIcon.addEventListener('click', () => {
  window.location.href = 'chat.html';
 });
