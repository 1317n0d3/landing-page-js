const DATA = [
    {
        question: 'Какая переменная записана неверно?',
        answers: [
            {
                id: '1',
                value: 'var b = false;',
                correct: false
            },
            {
                id: '2',
                value: 'var isDone = 0;',
                correct: false
            },
            {
                id: '3',
                value: 'var num = "STRING";',
                correct: false
            },
            {
                id: '4',
                value: 'var number = 12,5;',
                correct: true
            }
        ]
    },
    {
        question: 'Где верно указан вывод данных?',
        answers: [
            {
                id: '5',
                value: 'console.log("Hello");',
                correct: true
            },
            {
                id: '6',
                value: 'documentWrite("Hello");',
                correct: false
            },
            {
                id: '7',
                value: 'print(Hello);',
                correct: false
            },
            {
                id: '8',
                value: 'prompt("Hello")',
                correct: false
            },
            {
                id: '9',
                value: 'write("Hello");',
                correct: false
            }
        ]
    },
    {
        question: 'Где верно указано имя переменной?',
        answers: [
            {
                id: '10',
                value: 'var num_1;',
                correct: true
            },
            {
                id: '11',
                value: 'var num',
                correct: false
            },
            {
                id: '12',
                value: 'var 1num;',
                correct: false
            },
            {
                id: '13',
                value: 'var num-1;',
                correct: false
            },
            {
                id: '14',
                value: 'ver num;',
                correct: false
            }
        ]
    },
    {
        question: 'Какие функции выполняет JS?',
        answers: [
            {
                id: '15',
                value: 'Создает разметку на странице сайта',
                correct: false
            },
            {
                id: '16',
                value: 'Создает стилевое оформление сайта',
                correct: false
            },
            {
                id: '17',
                value: 'Отвечает за функции на стороне клиента',
                correct: true
            },
            {
                id: '18',
                value: 'Выполняет работу с сервером',
                correct: false
            },
            {
                id: '19',
                value: 'Отвечает за работу с базами данных',
                correct: false
            }
        ]
    },
    {
        question: 'Где можно использовать JavaScript?',
        answers: [
            {
                id: '20',
                value: 'Прикладное программное обеспечение',
                correct: false
            },
            {
                id: '21',
                value: 'Мобильные приложения',
                correct: false
            },
            {
                id: '22',
                value: 'Серверные приложения',
                correct: false
            },
            {
                id: '23',
                value: 'Веб-приложения',
                correct: false
            },
            {
                id: '24',
                value: 'Можно во всех перечисленных',
                correct: true
            }
        ]
    },
    {
        question: 'Какие циклы есть в языке JavaScript?',
        answers: [
            {
                id: '25',
                value: 'for, while, do while, foreach',
                correct: false
            },
            {
                id: '26',
                value: 'for, forMap, foreach, while',
                correct: false
            },
            {
                id: '27',
                value: 'for, while, do while',
                correct: true
            },
            {
                id: '28',
                value: 'for, forMap, foreach, while, do while',
                correct: false
            }
        ]
    },
    {
        question: 'Где верно указан запуск всплывающего окна?',
        answers: [
            {
                id: '29',
                value: 'info ("Hi")',
                correct: false
            },
            {
                id: '30',
                value: 'alert ("Hi")',
                correct: true
            },
            {
                id: '31',
                value: 'new alert ("Hi")',
                correct: false
            },
            {
                id: '32',
                value: 'Нет верных вариантов',
                correct: false
            }
        ]
    },
    {
        question: 'window[undefined] === undefined?',
        answers: [
            {
                id: '33',
                value: 'true',
                correct: true
            },
            {
                id: '34',
                value: 'false',
                correct: false
            }
        ]
    },
    {
        question: 'console.log(new Number(1) === 1);',
        answers: [
            {
                id: '35',
                value: 'false',
                correct: true
            },
            {
                id: '36',
                value: 'true',
                correct: false
            },
            {
                id: '37',
                value: 'undefined',
                correct: false
            },
            {
                id: '38',
                value: 'null',
                correct: false
            }
        ]
    },
    {
        question: 'with (function(x, undefined){}) length;',
        answers: [
            {
                id: '39',
                value: '1',
                correct: false
            },
            {
                id: '40',
                value: '2',
                correct: true
            },
            {
                id: '41',
                value: 'undefined',
                correct: false
            },
            {
                id: '42',
                value: 'Error',
                correct: false
            }
        ]
    }
];

let localResults = {};

const quiz = document.getElementById('quiz');
const questions = document.getElementById('questions');
const indicator = document.getElementById('indicator');
const results = document.getElementById('results');
const btnNext = document.getElementById('btn-next');
const btnRestart = document.getElementById('btn-restart');


const renderQuestions = (index) => {
    renderIndicator(index + 1);

    questions.dataset.currentStep = index;

    const renderAnswers = () => DATA[index].answers
        .map((answer) => `
            <li>
                <label>
                    <input class="answer-input" type="radio" name=${index} value=${answer.id}>
                    ${answer.value}
                </label>
            </li>
        `)
        .join('');

    questions.innerHTML = `
        <div class="quiz-questions-item">
            <div class="quiz-questions-item-question">${DATA[index].question}</div>
            <ul class="quiz-questions-item-answers">${renderAnswers()}</ul>
        </div>
    `;
};

const renderResults = () => {
    let content = '';
    let score = 0;

    const getClassname = (answer, questionIndex) => {
        let classname = '';

        if(!answer.correct && answer.id === localResults[questionIndex]){
            classname = 'answer--invalid';
        } else if(answer.correct && answer.id === localResults[questionIndex]) {
            classname = 'answer--valid';
            score++;
        } else if(answer.correct){
            classname = 'answer--valid';
        }

        return classname;
    };

    const getAnswers = (questionIndex) => DATA[questionIndex].answers
        .map((answer) => `<li class="${getClassname(answer, questionIndex)}">${answer.value}</li>`)
        .join('');

    DATA.forEach((question, index) => {
        content += `
            <div class="quiz-results-item">
                <div class="quiz-results-item-question">${question.question}</div>
                <ul class="quiz-results-item-answers">${getAnswers(index)}</ul>
            </div>
        `;
    });

    content += `
        <div class="quiz-results-score">Правильные ответы: ${score}</div>
    `;

    results.innerHTML = content;
};

const renderIndicator = (currentStep) => {
    indicator.innerHTML = `${currentStep}/${DATA.length}`;
};

quiz.addEventListener('change', (event) => {
    //Answer
    if(event.target.classList.contains('answer-input')){
        localResults[event.target.name] = event.target.value;
        btnNext.disabled = false;
    }
});

quiz.addEventListener('click', (event) => {
    //Next or Restart
    if(event.target.classList.contains('btn-next')){
        const nextQuestionIndex = Number(questions.dataset.currentStep) + 1;
        
        if(DATA.length === nextQuestionIndex){
            //results
            questions.classList.add('questions--hidden');
            indicator.classList.add('indicator--hidden');
            results.classList.add('results--visible');
            btnNext.classList.add('btn-next--hidden');
            btnRestart.classList.add('btn-restart--visible');
            renderResults();
        } else {
            //next question
            renderQuestions(nextQuestionIndex);
        }
        btnNext.disabled = true;
    }
    
    if(event.target.classList.contains('btn-restart')){
        localResults = {};
        results.innerHTML = '';

        questions.classList.remove('questions--hidden');
        indicator.classList.remove('indicator--hidden');
        results.classList.remove('results--visible');
        btnNext.classList.remove('btn-next--hidden');
        btnRestart.classList.remove('btn-restart--visible');

        renderQuestions(0);
    }
});

renderQuestions(0);