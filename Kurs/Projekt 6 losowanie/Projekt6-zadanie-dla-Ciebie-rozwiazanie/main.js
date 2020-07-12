const options = ['opcja 1', 'opcja 2'];

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
}
const showOptions = () => {
    alert(options.join(' --- --- '));
}

document.querySelector('.add').addEventListener('click', addOption);
document.querySelector('.clean').addEventListener('click', resetOptions);
document.querySelector('.showOptions').addEventListener('click', showOptions);

//Finished git