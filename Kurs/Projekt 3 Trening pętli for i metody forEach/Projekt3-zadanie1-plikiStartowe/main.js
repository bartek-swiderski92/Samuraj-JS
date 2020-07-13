// tutaj rozwiązanie

let size = 10;
const btn = document.querySelector("button");
const liItems = document.querySelectorAll('li');
const liArray = [...liItems];

// const liBig = function () {
//     for (let i = 0; i < liItems.length; i++) {
//         liItems[i].style.display = "block"
//         liItems[i].style.fontSize = size + "px";

//     };
//     size++;
// };

const liBig = function () {
    liItems.forEach((liItem) => {
        liItem.style.display = "block";
        liItem.style.fontSize = size + "px";
    })
    size++;
};



btn.addEventListener("click", liBig);