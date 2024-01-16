var startButton = document.getElementById('start');
var timerValue = document.getElementById('time');
var currentQuestionIndex = document.getElementById('question-title');
var seconds = 60;
var counter = 0;
var hiddenQuestion;
var firstLine1;
var currentQuestionIndex = 0;
var question;
var choicesDiv;
var seeScore;
var sendSubmit = document.getElementById('submit');
var hiScoreViw = document.getElementById("highscores");
// Create connect function whit button ussing assEventListener.
startButton.addEventListener('click', function clocdown() {
    seconds--;
    firstLine1 = document.getElementById("start-screen");
    firstLine1.style.display = "none";
    // set place where timer is located.
    timerValue.textContent = seconds;
    hiddenQuestion = document.getElementById("questions");
    hiddenQuestion.style.display = "block";

    if ((seconds <= 0) || (currentQuestionIndex === questions.length)) {
        // Reset the timer
        clearInterval(clocdown);
        timerValue.textContent = "Time is over";
        stopQuiz();
        seeScore = document.getElementById("end-screen")
        seeScore.style.display = "block";
        hiddenQuestion.style.display = "none";

    } else {
        // Continue counting down
        setTimeout(clocdown, 1000);
        startButton.disabled = true;
    }
    console.log(seconds);
})

function stopQuiz() {
    choicesDiv.querySelectorAll("button").forEach(button => button.disabled = true);
}
sendSubmit.addEventListener("click", function() {
    seeScore.style.display = "none";

    // hiScoreViw.style.display = "block";
})