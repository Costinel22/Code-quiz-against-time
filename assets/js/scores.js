var score;
// Get references to HTML elements
// const endScreen = document.getElementById("end-screen");
const finalScoreSpan = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitButton = document.getElementById("submit");
const feedbackDiv = document.getElementById("feedback");
document.addEventListener("DOMContentLoaded", function() {

    // Function to display the end screen
    function displayEndScreen(score) {
        // endScreen.style.display = "block"; // Show the end screen
        finalScoreSpan.textContent = score; // Update the score
    }
    // Submit button click handler
    submitButton.addEventListener("click", function() {
        const enteredInitials = initialsInput.value.toUpperCase(); // Get initials in uppercase

        // Validate initials (optional)
        if (enteredInitials.length !== 3) {
            // Handle invalid initials, e.g., display an error message
            feedbackDiv.textContent = "Please enter exactly 3 initials.";
            //feedbackDiv.style.display = "block"; // Show feedback
            return;
        }

        // Process the submission (e.g., save score and initials)
        saveScore(score, enteredInitials); // Example function

        // Display confirmation message
        feedbackDiv.textContent = "Score saved!";
        feedbackDiv.style.display = "block"; // Show feedback
    });

    // Example function to save score (replace with your logic)
    function saveScore(score, initials) {
        // Implement your score-saving logic here, e.g., using localStorage or a server
        console.log("Score saved:", score, "Initials:", initials);
    }

    // Example trigger for displaying the end screen (replace with your logic)
    // This could be triggered by a game ending or other events
    displayEndScreen(score);
});