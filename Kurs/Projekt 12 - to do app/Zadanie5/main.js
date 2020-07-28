document.body.appendChild(document.createElement('form'));
const form = document.querySelector('form');
const inputAdd = form.appendChild(document.createElement('input'));
inputAdd.classList = 'inputAdd';
const buttonAdd = form.appendChild(document.createElement('button'));
buttonAdd.classList = 'buttonAdd';
buttonAdd.textContent = 'Dodaj zadanie';
document.body.appendChild(document.createElement('h2'));
const h2 = document.querySelector('h2');
h2.textContent = 'Liczba zadań: '
h2.appendChild(document.createElement('span'));
const span = document.querySelector('span');
span.textContent = '0';
const inputSearch = document.body.appendChild(document.createElement('input'));
inputSearch.classList = 'inputSearch';
document.body.appendChild(document.createElement('ul'));
const ul = document.querySelector('ul');
const tasks = [];
const liElements = document.getElementsByTagName('li');

function removeTask(e) {
    e.target.parentNode.remove()
    const index = e.target.parentNode.dataset.key;
    tasks.splice(index, 1);
    renderList();
    span.textContent = tasks.length;
}

function addTask(e) {
    e.preventDefault();
    if (inputAdd.value === '') return
    console.log('click');
    let task = document.createElement('li');
    let textSpan = task.appendChild(document.createElement('span'));
    textSpan.textContent = inputAdd.value;
    textSpan.classList = 'text';
    task.appendChild(document.createElement('button'));
    const deleteBtn = task.querySelector('button')
    deleteBtn.textContent = 'usuń'
    ul.appendChild(task);
    tasks.push(task);
    renderList();
    inputAdd.value = '';
    deleteBtn.addEventListener('click', removeTask);
}
const renderList = () => {
    ul.textContent = '';
    tasks.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
        span.textContent = tasks.length;
    })
}

const search = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasksList = tasks
    tasksList = tasksList.filter(li => li.textContent.toLowerCase().includes(searchText));
    console.log(tasksList);
    ul.textContent = '';
    tasksList.forEach(li => ul.appendChild(li));
}

buttonAdd.addEventListener('click', addTask);
inputSearch.addEventListener('input', search)