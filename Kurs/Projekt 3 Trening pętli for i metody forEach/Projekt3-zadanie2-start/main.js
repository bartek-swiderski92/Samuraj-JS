let size = 20;
let orderElement = 1;


const init = () => {
    const btn = document.createElement("button");
    const resetBtn = document.createElement("button");
    document.body.appendChild(btn);
    btn.textContent = "Dodaj 10 elementów do listy";
    document.body.appendChild(resetBtn);
    resetBtn.textContent = "Reset";
    // console.log("Przycisk!")
    const ul = document.createElement("ul")
    ul.style.listStyle = "none";
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
    resetBtn.addEventListener("click", reset);
}

const createLiElements = () => {
    // console.log('Klik!');

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        const ul = document.querySelector("ul");

        ul.appendChild(li);
        li.textContent = "Element " + orderElement;
        console.log("Dodałem li " + orderElement++);
        li.style.fontSize = `${size++}px`;


    }
    // tutaj kod
}
// let liCollection = document.getElementsByTagName("li");
// let liItems = [...liCollection]

const reset = () => {
    size = 10;
    orderElement = 1;
    // let liCollection = [];
    document.querySelector('ul').textContent = "";



}
init()