const Question = [
    {
        "question": "It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
        "options": [
            "A. Sunday",
            "B. Saturday",
            "C. Friday",
            "D. Thursday"
        ],
        "answer": "C. Friday"
    },
    {
        "question": "What is the capital of France?",
        "options": [
            "A. Berlin",
            "B. Madrid",
            "C. Paris",
            "D. Rome"
        ],
        "answer": "C. Paris"
    },
    {
        "question": "Which planet is known as the Red Planet?",
        "options": [
            "A. Earth",
            "B. Mars",
            "C. Jupiter",
            "D. Saturn"
        ],
        "answer": "B. Mars"
    },
    {
        "question": "What is the largest mammal?",
        "options": [
            "A. Elephant",
            "B. Blue Whale",
            "C. Giraffe",
            "D. Hippopotamus"
        ],
        "answer": "B. Blue Whale"
    },
    {
        "question": "Which element has the chemical symbol 'O'?",
        "options": [
            "A. Gold",
            "B. Oxygen",
            "C. Silver",
            "D. Hydrogen"
        ],
        "answer": "B. Oxygen"
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": [
            "A. Charles Dickens",
            "B. William Shakespeare",
            "C. Mark Twain",
            "D. Jane Austen"
        ],
        "answer": "B. William Shakespeare"
    },
    {
        "question": "What is the smallest prime number?",
        "options": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 5"
        ],
        "answer": "B. 2"
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": [
            "A. Gold",
            "B. Iron",
            "C. Diamond",
            "D. Platinum"
        ],
        "answer": "C. Diamond"
    },
    {
        "question": "What is the longest river in the world?",
        "options": [
            "A. Nile",
            "B. Amazon",
            "C. Yangtze",
            "D. Mississippi"
        ],
        "answer": "A. Nile"
    },
    {
        "question": "Which country is the largest by area?",
        "options": [
            "A. China",
            "B. Canada",
            "C. Russia",
            "D. United States"
        ],
        "answer": "C. Russia"
    },
    {
        "question": "Which planet is closest to the sun?",
        "options": [
            "A. Earth",
            "B. Venus",
            "C. Mars",
            "D. Mercury"
        ],
        "answer": "D. Mercury"
    },
    {
        "question": "Who developed the theory of relativity?",
        "options": [
            "A. Isaac Newton",
            "B. Albert Einstein",
            "C. Galileo Galilei",
            "D. Nikola Tesla"
        ],
        "answer": "B. Albert Einstein"
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "options": [
            "A. Tomato",
            "B. Avocado",
            "C. Onion",
            "D. Pepper"
        ],
        "answer": "B. Avocado"
    },
    {
        "question": "What is the smallest country in the world?",
        "options": [
            "A. Monaco",
            "B. Vatican City",
            "C. Malta",
            "D. Liechtenstein"
        ],
        "answer": "B. Vatican City"
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": [
            "A. Atlantic Ocean",
            "B. Indian Ocean",
            "C. Arctic Ocean",
            "D. Pacific Ocean"
        ],
        "answer": "D. Pacific Ocean"
    }
];

let main = document.querySelector('.root');
let userAnswers = [];

for (let i = 0; i < Question.length; i++) {
    createQuestionCard(i + 1, Question[i].question, Question[i].options, Question[i].answer);
}

let button = document.createElement('button');
button.classList.add('btn');
button.innerText = "Submit";
button.addEventListener('click', calculateScore);
main.appendChild(button);

function createQuestionCard(num, question, options, answer) {
    let root = document.createElement('div');
    root.classList.add('container');

    let qno = document.createElement('div');
    qno.classList.add('qno');
    qno.innerText = `Question ${num} of ${Question.length}`;
    root.appendChild(qno);

    let ques = document.createElement('div');
    ques.classList.add('ques');
    ques.innerText = question;
    root.appendChild(ques);

    let opts = document.createElement('div');
    opts.classList.add('opts');
    root.appendChild(opts);

    for (let i = 0; i < options.length; i++) {
        createOption(num - 1, options[i], opts);
    }

    main.appendChild(root);
}

function createOption(questionIndex, option, opts) {
    let opt = document.createElement('div');
    opt.classList.add('opt');
    opt.innerHTML = option;
    opt.addEventListener('click', () => selectOption(questionIndex, option));
    opts.appendChild(opt);
}

function selectOption(questionIndex, option) {
    userAnswers[questionIndex] = option;
    let optsDiv = document.querySelectorAll('.opts')[questionIndex];
    optsDiv.querySelectorAll('.opt').forEach(opt => {
        opt.classList.remove('selected');
    });
    optsDiv.querySelectorAll('.opt').forEach(opt => {
        if (opt.innerHTML === option) {
            opt.classList.add('selected');
        }
    });
}

function calculateScore() {
    let score = 0;
    for (let i = 0; i < Question.length; i++) {
        if (userAnswers[i] === Question[i].answer) {
            score++;
        }
    }
    alert(`Your score is ${score} out of ${Question.length}`);
}
