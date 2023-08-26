

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");

    // Function to create and animate falling letters
    function createFallingLetter() {
        const letter = document.createElement("div");
        letter.className = "falling-letter";
        letter.textContent = getRandomLetter();

        const maxX = container.clientWidth - 20; // Adjust for letter width
        const startX = Math.random() * maxX;
        const startY = 0;

        letter.style.left = startX + "px";
        letter.style.top = startY + "px";

        container.appendChild(letter);

        // Animate the falling letter
        const animationDuration = Math.random() * 3 + 2; // Random duration between 2 to 5 seconds
        letter.style.animation = `fall ${animationDuration}s linear`;
        
        // Remove the letter when the animation ends
        letter.addEventListener("animationend", function () {
            container.removeChild(letter);
        });
    }

    // Function to get a random uppercase letter
    function getRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        return alphabet[randomIndex];
    }

    // Modified movePoint function to create falling letters
    function movePoint() {
        const point = document.querySelector(".point");
        const maxX = container.clientWidth - point.clientWidth;
        const maxY = container.clientHeight - point.clientHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        point.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Create falling letters when the point moves
        createFallingLetter();
    }

    // Move the point initially
    movePoint();

    // Set an interval to continuously move the point
    setInterval(movePoint, 2000); // Move every 2 seconds
});
