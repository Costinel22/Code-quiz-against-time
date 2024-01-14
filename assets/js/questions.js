var startButton = document.getElementById('start');
var timerValue = document.getElementById('time');
var seconds = 60;
var counter = 0;



// Create connect function whit button ussing assEventListener.
startButton.addEventListener('click', function clocdown() {
    seconds--;
    // set place where timer is located.
    timerValue.textContent = seconds;
    var hiddenQuestion = document.getElementById("questions");
    hiddenQuestion.style.display = "block";
    if (seconds === 0) {
        // Reset the timer
        seconds = 0;
        startButton.disabled = false;
    } else {
        // Continue counting down
        setTimeout(clocdown, 1000);
    }
    console.log(seconds)
})

// create a variable for the question that contine question, array whit answer and corect ansvert.
var questions = [{
        question: "What is the correct syntax for adding a JavaScript comment to code?",
        choices: ["// comment", "'comment'", "(comment)"],
        correctAnswers: ["// comment"]
    },
    {
        question: "Which HTML element is used to create a heading level 1?",
        choices: ["<h1>", "<h2>", "<p>", "<header>"],
        correctAnswers: ["<h1>"]
    },
    {
        question: "How do you target an element with the ID 'myElement' in JavaScript?",
        choices: ["document.querySelector('#myElement')", "document.getElementByID('myElement')", "querySelector('#myElement')", "getElementById('#myElement')"],
        correctAnswers: ["document.querySelector('#myElement')"]
    },
    {
        question: "What is the purpose of the CSS `display` property?",
        choices: ["To set font size", "To set text color", "To control element visibility", "To set element width"],
        correctAnswers: ["To control element visibility"]
    },
    {
        question: "Which CSS property is used to change the background color of an element?",
        choices: ["color", "backgroundColor", "background-color", "bgColor"],
        correctAnswers: ["background-color"]
    },
    {
        question: "What is the difference between inline and external CSS?",
        choices: ["None", "Inline is written in a separate file", "External is written in HTML tags", "Inline is written in a separate file, external is written in HTML tags"],
        correctAnswers: ["Inline is written in HTML tags, external is written in a separate file"]
    },
    {
        question: "How do you create a JavaScript variable?",
        choices: ["var variableName = value", "let variableName = value", "const variableName = value", "All of the above"],
        correctAnswers: ["All of the above"]
    },
    {
        question: "What is the correct way to create an HTML list?",
        choices: ["<list>", "<ul>", "<list-items>", "<ol>"],
        correctAnswers: ["<ul>", "<ol>"]
    },
    {
        question: "What is the difference between JavaScript functions and methods?",
        choices: ["No difference", "Functions are standalone, methods are associated with objects", "Methods are standalone, functions are associated with objects", "Functions return values, methods don't"],
        correctAnswers: ["Functions are standalone, methods are associated with objects"]
    },
    {
        question: "How do you link an external CSS file to an HTML document?",
        choices: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<link href='style.css'>", "<stylesheet src='style.css'>"],
        correctAnswers: ["<link rel='stylesheet' href='style.css'>"]
    }
];