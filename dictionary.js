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
let leftColumn = document.querySelector('.main-block-col-1');
let strItems = '';

for(let i = 0; i < words.length; i++) {
    strItems += '<li>'+ words[i].word + ' - ' + words[i].translate +'</li>';
}

leftColumn.innerHTML = strItems;