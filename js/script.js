const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizContainer = document.querySelector("#quiz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let actualQuestion = 0;
let points = 0;

const questions = [
    {
        "question": "What _____ you do last night?",
        "answers": [
            {
                "answer": "did",
                "correct": true
            },
            {
                "answer": "do",
                "correct": false
            },
            {
                "answer": "will",
                "correct": false
            },
            {
                "answer": "had",
                "correct": false
            },
        ],
    },
    {
        "question": "What _____ you do tomorrow?",
        "answers": [
            {
                "answer": "did",
                "correct": false
            },
            {
                "answer": "do",
                "correct": false
            },
            {
                "answer": "will",
                "correct": true
            },
            {
                "answer": "had",
                "correct": false
            },
        ],
    }
]

function init() {
    createQuestion(0);
}

function createQuestion(i) {

    const oldButtons = answersBox.querySelectorAll("button");

    oldButtons.forEach(function(btn) {
        btn.remove();
    })

    const questionText = question.querySelector("#question-text");
    const questionNumber = question.querySelector("#question-number");

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    questions[i].answers.forEach(function(answer, i) {

        const answerTemplate = document.querySelector(".answer-template").cloneNode(true);

        const letterBtn = answerTemplate.querySelector(".btn-letter");
        const answerText = answerTemplate.querySelector(".question-answer");

        letterBtn.textContent = letters[i];
        answerText.textContent = answer['answer'];

        answerTemplate.setAttribute("correct-answer", answer["correct"]);

        answerTemplate.classList.remove("hide");
        answerTemplate.classList.remove("answer-template");

        answersBox.appendChild(answerTemplate);

        answerTemplate.addEventListener("click", function() {
            checkAnswer(this);
        });
    });

    actualQuestion++;
}

function checkAnswer(btn) {

    const buttons = answersBox.querySelectorAll("button");

    buttons.forEach(function(button) {
        if(button.getAttribute("correct-answer") === "true") {

            button.classList.add("correct-answer");

            if(btn === button) {

                points++;
            }
        } else {

            button.classList.add("wrong-answer");
        }
    });

    
}

init();