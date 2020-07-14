// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']
let indexLetter = 0;
let indexWord = 0;

function showWord() {
    // spnText.textContent += txt[0][0++]
    set
}

// Implementacja
const addLetter = () => {
    // Użyj w środku setTimeout
    setTimeout(() => {
        spnText.textContent += txt[indexWord][indexLetter]
        indexLetter++;
        if (indexLetter - 1 == txt[indexWord].length) {
            console.log('maks letter')
            indexLetter = 0;
            spnText.textContent = '';
            indexWord++;
            if (indexWord === txt.length) {
                console.log('maks word')
                spnText.textContent = txt[indexWord]
            }
        }
        addLetter();
    }, 200);
}


addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);