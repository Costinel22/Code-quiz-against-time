var questions;
// create a variable for the question that contine question, array whit answer and corect ansvert.
questions = [{
        // we start whit question 
        question: "What is the correct syntax for adding a JavaScript comment to code?",
        //contine whit array for answer
        choices: ["// comment", "'comment'", "(comment)"],
        // and whit array for god answer
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
    // {
    //     question: "What is the difference between inline and external CSS?",
    //     choices: ["None", "Inline is written in a separate file", "External is written in HTML tags", "Inline is written in a separate file, external is written in HTML tags"],
    //     correctAnswers: ["Inline is written in HTML tags, external is written in a separate file"]
    // },
    // {
    //     question: "How do you create a JavaScript variable?",
    //     choices: ["var variableName = value", "let variableName = value", "const variableName = value", "All of the above"],
    //     correctAnswers: ["All of the above"]
    // },
    // {
    //     question: "What is the correct way to create an HTML list?",
    //     choices: ["<list>", "<ul>", "<list-items>", "<ol>"],
    //     correctAnswers: ["<ul>", "<ol>"]
    // },
    // {
    //     question: "What is the difference between JavaScript functions and methods?",
    //     choices: ["No difference", "Functions are standalone, methods are associated with objects", "Methods are standalone, functions are associated with objects", "Functions return values, methods don't"],
    //     correctAnswers: ["Functions are standalone, methods are associated with objects"]
    // },
    // {
    //     question: "How do you link an external CSS file to an HTML document?",
    //     choices: ["<link rel='stylesheet' href='style.css'>", "<style src='style.css'>", "<link href='style.css'>", "<stylesheet src='style.css'>"],
    //     correctAnswers: ["<link rel='stylesheet' href='style.css'>"]
    // }
];
var currentQuestionIndex = 0;

function displayQuestion() {
    question = questions[currentQuestionIndex];
    document.getElementById("question-title").textContent = question.question;
    choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";
    //	create the buttons for the choices answers
    question.choices.forEach(choice => {
        var choiseElement = document.createElement("button");
        choiseElement.textContent = choice;
        choiseElement.addEventListener("click", handleChoiceClick);
        choicesDiv.appendChild(choiseElement);
    });

}
var selectedChoice
    // var score = 0;
    // Function to handle choice clicks:
function handleChoiceClick() {
    selectedChoice = this.textContent;
    // Check if the selected choice is correct 
    if (questions[currentQuestionIndex].correctAnswers.includes(selectedChoice)) {
        console.log("Correct answer!");
        score + 2;
    } else {
        console.log("Incorrect answer.");
        // here subtract the time if answer is incorrect
        seconds -= 10;
    }
    //  go at next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();

    } else {
        // All questions answered
        console.log("Quiz completed!");
        stopQuiz();

    }
    // Update the counter display
    counter.textContent = seconds;

}
// here dispaly the question, the (hide:none) from CSS is disabled
displayQuestion();