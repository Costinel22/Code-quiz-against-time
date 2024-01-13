var startButton = document.getElementById('start');
var timerValue = document.getElementById('time');
var seconds = 60;
// Create connect function whit button ussing assEventListener.
startButton.addEventListener('click', function clocdown() {
    seconds--;
    // set place where timer is located.
    timerValue.textContent = seconds;
    if (seconds === 0) {
        // Reset the timer
        seconds = 0;
    } else {
        // Continue counting down
        setTimeout(clocdown, 1000);
    }
    console.log(seconds)
})