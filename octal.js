async function convertBinaryToOcta() {
    // Get the binary number from the input field.
    var binaryNumber = document.getElementById("binaryIn").value;
    var solutionDiv = document.getElementById("solution");
    // Clear previous solution steps.
    solutionDiv.innerHTML = "";
    // Create a step-by-step solution
    for (var i = 0; i < binaryNumber.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for demonstration purposes.
        var binarySubstring = binaryNumber.substr(0, i + 1);
        var decimalNumber = parseInt(binarySubstring, 2);
        var hexadecimalNumber = decimalNumber.toString(8).toUpperCase();
        var step = `Step ${i + 1}: Convert ${binarySubstring} to hexadecimal: ${binarySubstring} = ${hexadecimalNumber}`;
        solutionDiv.innerHTML += step + "<br>";
        if (i === binaryNumber.length - 1) {
            // Display the final result in the input field.
            document.getElementById("octalOutput").value = hexadecimalNumber;
        }
    }
}