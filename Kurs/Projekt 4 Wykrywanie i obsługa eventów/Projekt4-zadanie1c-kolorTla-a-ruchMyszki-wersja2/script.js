// const h1 = document.querySelector('h1');
// document.body.addEventListener('mousemove', (e) => {
//     // console.log(e.clientX, e.clientY);
//     // h1.textContent = `${e.pageX}, ${e.pageY}`;
//     // h1.textContent = `${e.screenX}, ${e.screenY}`;
//     h1.textContent = `${e.clientX}, ${e.clientY}`;

//     // document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/2}, ${e.clientX/e.clientY*150})`
//     document.body.style.backgroundColor = "rgb(" + e.clientX / 3 + "," + e.clientY / 2 + "," + e.clientX / e.clientY * 150 + ")";
// })

const h1 = document.querySelector('h1');
document.body.addEventListener('mousemove', (e) => {
        const x = e.clientX + 1;
        const y = e.clientY + 1;

        const width = window.innerWidth;
        const height = window.innerHeight;
        h1.textContent = `${x}, ${y}`;
        const red = x / width * 100;
        const green = y / height * 100;
        const blue = (x + y) / (width + height) * 100;


        document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
        const fontClr = Math.abs(((red + green + blue) / 3) - 100);

        h1.style.color = `rgb(${fontClr}%, ${fontClr}%, ${fontClr}%)`;
    }

)