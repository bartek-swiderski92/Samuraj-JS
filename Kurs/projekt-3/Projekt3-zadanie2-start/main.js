let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    document.body.appendChild(btn)
    btn.textContent = "Dodaj 10 elementów do listy";
    // console.log("Przycisk!")
    const ul = document.createElement("ul")
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {
    // console.log('Klik!');

    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        const ul = document.querySelector("ul");


        ul.appendChild(li);
        li.textContent = "Element " + orderElement;
        console.log("Dodałem li " + orderElement++);

    }
    // tutaj kod
}

init()