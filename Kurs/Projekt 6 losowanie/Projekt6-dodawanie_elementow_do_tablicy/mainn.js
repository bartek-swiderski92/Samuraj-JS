const names = [];
const div = document.querySelector('div');
const addName = (e) => {
    // console.log(e.target.value);
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (newName.length) {
        for (const name of names) {
            if (name === newName) {
                alert('to już jest');
                return;
            }
        }
        names.push(newName);
        console.log(names);
        div.textContent += newName + ', ';
        input.value = '';
    }
}

document.querySelector('button').addEventListener('click', addName);