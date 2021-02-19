const results = [
    new Result("Ez", 0),
    new Result("Normal", 1),
    new Result("Medium", 2),
    new Result("Hard", 3)
];

const questions = [
    [
        new Question("JS",
        [
            new Answer("yes", 0),
            new Answer("no", 1),
            new Answer("May be", 0),
            new Answer("May be not", 0)
        ])
    ]
];

const quiz = new Quiz(1, questions, results);

const headElem = document.querySelector("#head");
const buttonsElem = document.querySelectorAll(".button");