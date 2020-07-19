// http://websamuraj.pl/examples/js/projekt11/

let hSeconds = 0;
let seconds = 00;
let minutes = 0;
const startBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const div = document.querySelector('div div');
let interval;

function start() {
    console.log('start')
    if (startBtn.textContent == 'Start') {
        interval = setInterval(() => {
            startBtn.textContent = 'Pause';

            if (hSeconds < 10) {
                div.textContent = `${seconds}.0${hSeconds++}`;
            } else {
                div.textContent = `${seconds}.${hSeconds++}`;
            }
            if (hSeconds == 100) {
                hSeconds = 0;
                seconds++;
            }
        }, 10);
    } else {
        startBtn.textContent = 'Pause'; {
            startBtn.textContent = 'Start';
            clearInterval(interval)
        }
    }
}

function reset() {
    console.log('reset');
    hSeconds = 0;
    seconds = 0;
    div.textContent = '---';
}

startBtn.addEventListener('click', start)
resetBtn.addEventListener('click', reset)