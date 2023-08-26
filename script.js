// script.js
const chessboard = document.getElementById("chessboard");

// Initialize the color class to "chessboard-light"
let colorClass = "chessboard-light";

// Add a click event listener to the chessboard
chessboard.addEventListener("click", function () {
    // Toggle the color class between "chessboard-light" and "chessboard-dark"
    if (colorClass === "chessboard-light") {
        colorClass = "chessboard-dark";
    } else {
        colorClass = "chessboard-light";
    }

    // Update the class of the chessboard element to change its color
    chessboard.className = "chessboard " + colorClass;
});
