const question = document.querySelector("#question");
const answersBox = document.querySelector("#answers-box");
const quizContainer = document.querySelector("#quiz-container");
const scoreContainer = document.querySelector("#score-container");
const letters = ["a", "b", "c", "d"];
let actualQuestion = 0;
let point = 0;

const questions = [
    {
        "question": "What _____ you do last night?",
        "answer": [
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
        "answer": [
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
}

init();