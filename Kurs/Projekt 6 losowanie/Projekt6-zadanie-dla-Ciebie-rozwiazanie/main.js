const options = ['opcja 1', 'opcja 2'];

const showAdvice = () => {
    const index = Math.floor(Math.random() * options.length);
    // console.log(index);
    document.querySelector('h1').textContent = options[index];
}

const addOption = (event) => {
    event.preventDefault();
    const input = document.querySelector('input')
    options.push(input.value);
    console.log(options);
    alert(`Dodana zostsała opcja ${input.value}`);
    input.value = '';


}

const resetOptions = (event) => {
    event.preventDefault();
    options.length = 0;
    document.querySelector('h1').textContent = ""
}
const showOptions = () => {
    alert(options.join(' --- --- '));
}

document.querySelector('.add').addEventListener('click', addOption);
document.querySelector('.clean').addEventListener('click', resetOptions);
document.querySelector('.showOptions').addEventListener('click', showOptions);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);