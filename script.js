let words = [
    {
        word: 'word',
        translate: 'слово',
    },
    {
        word: 'hi',
        translate: 'привет'
    },
    {
        word: 'world',
        translate: 'мир'
    },
    {
        word: 'game',
        translate: 'игра',
    },
    {
        word: 'lesson',
        translate: 'урок',
    },
    {
        word: 'elephant',
        translate: 'слон',
    },
    {
        word: 'fox',
        translate: 'лиса',
    },
    {
        word: 'room',
        translate: 'комната',
    },
    {
        word: 'house',
        translate: 'дом',
    },
];

class Question {
    constructor(words) {
        this.words = words;
        this.randomWords = [];
        while (this.randomWords.length != 3) {
            let randomNumber = Math.round(Math.random() * (words.length - 1));
            let randomWord = words[randomNumber];
            if (!this.randomWords.includes(randomWord)) {
                this.randomWords.push(randomWord);
            }
        }
        this.trueAnswer = this.randomWords[1];
    }

    display() {
        let wordContainer = document.querySelector('.word-container-question');
        let chooseBtn = document.querySelectorAll('.word-choose-btn');
        wordContainer.innerHTML = this.trueAnswer.word;
        for (let i = 0; i < chooseBtn.length; i++) {
            chooseBtn[i].innerHTML = this.randomWords[i].translate;
            let trueAnswer = this.trueAnswer;
            chooseBtn[i].addEventListener('click', function() {
                let status = '';
                if (chooseBtn[i].innerText == trueAnswer.translate) {
                    status = 'success';
                } else {
                    status = 'reject';
                }
                chooseBtn[i].classList.add(status);
                setTimeout(function() {
                    chooseBtn[i].classList.remove(status);
                    curIndex++;
                    if (curIndex < questions.length) {
                        curQuestion = questions[curIndex];
                        curQuestion.display();
                    }
                }, 100);
            });
        }
    }
}

let questions = [];
for (let i = 0; i < 5; i++) {
    let question = new Question(words);
    questions.push(question);
}
let curIndex = 0;
let curQuestion = questions[curIndex];
curQuestion.display();