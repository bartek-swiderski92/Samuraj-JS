// http://websamuraj.pl/examples/js/projekt11/

let hSeconds = 0;
let seconds = 00;
let minutes = 0;
const startBtn = document.querySelector('.main');
startBtn.addEventListener('click', start)
const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', reset)

const div = document.querySelector('div');

function start() {
    console.log('start')
    const interval = setInterval(() => {
        startBtn.textContent = 'Pause';
        hSeconds++

        if (hSeconds < 10) {
            div.textContent = `${seconds}.0${hSeconds++}`
        } else {
            div.textContent = `${seconds}.${hSeconds++}`
        }
        if (hSeconds == 100) {
            hSeconds = 0;
            seconds++
        }
    }, 10);
}

function reset() {
    console.log('reset')
}