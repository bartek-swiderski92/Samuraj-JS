const square = document.createElement('div');
document.body.appendChild(square);
let grow = true; //flaga
let size = 100; //wielkość kwadratu

//style dodawane liniowo do elementów html
square.style.width = size + "px";
// 100 + "px" -> "100" + "px" -> "100px"
square.style.height = size + "px";
// square.style.backgroundColor = "red"; // camelCase zapis vs background-color
// document.body.style.backgroundColor = "blue"

//maksymalna wielkość kwadratu
//window.innerWidth * 0.5

window.addEventListener("scroll", function () {
    if (size >= window.innerWidth / 2) {
        grow = !grow; //change to false
    } else if (size == 0) {
        grow = !grow; //change to true
    }

    if (grow) {
        // size++;
        // size = size + 10;
        size += 5

        square.style.width = size + "px";
        square.style.height = size + "px";
    } else {
        size -= 5;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
});