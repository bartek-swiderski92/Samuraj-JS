// KOLOR GENEROWANY W ZALEŻNOŚCI OD TEGO GDZIE KLIKNE

// jeśli wartość dla x (event.clientX) i y (event.clientY) jest parzysta (np. 100,122)  to kolor czerwony
// jesli wartość dla x i y jest nieparzysta to kolor niebieski
// jeśli jeden z kolorów jest parzysty a drugi nieparzysty to kolor zielony

document.body.addEventListener("click", (event) => {
    console.log(event.clientX, event.clientY);
    const color = getColor(event);
    document.body.style.backgroundColor = color;
})

const getColor = (e) => {
    if (e.clientX % 2 === 0) {
        if (e.clientY % 2 === 0) {
            console.log("czerwony!");
            return "red";
        } else {
            console.log("zielony!");
            return "green";
        }
    } else {
        if (e.clientY % 2 === 0) {
            console.log("zielony!");
            return "green";
        } else {
            console.log("niebieski!");
            return "blue";
        }
    }
}