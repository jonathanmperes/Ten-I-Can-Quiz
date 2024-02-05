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