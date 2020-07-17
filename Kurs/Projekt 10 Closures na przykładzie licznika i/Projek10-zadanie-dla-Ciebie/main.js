// function show() {
//     let time = 0;

//     function timer() {
//         document.body.textContent = `Spędziłeś tutaj ${time++} sekund`
//     }

//     setInterval(timer, 1000)
// }

// show()

const clock = () => {
    let seconds = 0;
    document.body.textContent = 0 + ' sekund';

    const timer = () => {
        seconds++;
        document.body.textContent = seconds + ' sekund';
    }

    return timer
}

const start = clock()

setInterval(start, 1000)