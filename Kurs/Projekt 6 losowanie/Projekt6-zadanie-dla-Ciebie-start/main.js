let advices = ['Walcz!', 'Spróbuj kiedy indziej', 'Daj sobie spokój'];

const btnAdd = document.querySelector('.add');
const btnCln = document.querySelector('.clean');
const btnAdv = document.querySelector('.showAdvice');
const btnOpts = document.querySelector('.showOptions');


const addAdvice = e => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newAdvice = input.value;
    if (newAdvice.length) {
        for (const advice of advices) {
            if (advice === newAdvice) {
                alert(`Błąd! Możliwość "${newAdvice}" już istnieje!`);
                return;
            }
        }
        alert(`Dodałem "${newAdvice}" do możlwości!`)
        console.log('Dodałem porade!');
        advices.push(newAdvice);
        console.log(advices);
        input.value = '';
    }
}

btnAdd.addEventListener('click', addAdvice);


const resetAdvices = e => {
    e.preventDefault();
    console.log('wyczyściłem tablice!')
    advices = ['Walcz!', 'Spróbuj kiedy indziej', 'Daj sobie spokój'];
    console.log(advices);
    h1.textContent = '';
    alert("Wyczyściłem możiwości!");
}

btnCln.addEventListener('click', resetAdvices);

const showAdvice = () => {
    // console.log(Math.floor(Math.random() * advices.length));
    const index = Math.floor(Math.random() * advices.length);
    let h1 = document.querySelector('h1');
    console.log(advices[index]);
    h1.textContent = advices[index];
}

btnAdv.addEventListener('click', showAdvice);

const showOptions = () => {
    alert(`Istniejące możliwośći: 
        ${advices.join(`,
        `)}.`)
    // function loop() {
    //     for (let i = 0; i < advices.length; i++) {
    //         console.log(advices[i]);
    //         // advices[i];
    //     };
    // };
    // loop()
    // // alert(advices[0] + ', ' + advices[1] + ', ' + advices[2]);
    // alert(loop());
}

btnOpts.addEventListener('click', showOptions);

//test