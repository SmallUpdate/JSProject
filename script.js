function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

let ans, s, score = 0;

function generate() {
    a = getRandomInt(3);

    if (a === 3) {
        operator = 0;
        b = getRandomInt(2);
    } else if (a === 2) {
        operator = getRandomInt(2) - 1;
        b = 1;
    } else {
        operator = 1;
        b = getRandomInt(2);
    }
    
    if (operator === 0) {
        ans = a - b;
        s = '-';
    } else {
        ans = a + b;
        s = '+';
    }
    
    document.querySelector('.text').innerHTML = a + s + b + '=?';

    document.querySelector('header').innerHTML = 'Score: ' + score;
}

generate();

var button = document.querySelectorAll('.button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (event) {
        if (button[i].innerHTML == ans) {
            score++;
            generate();
        }
    });
}