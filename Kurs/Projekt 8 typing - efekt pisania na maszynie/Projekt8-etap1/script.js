const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris libero, lacinia et velit non, dictum aliquet nisi. Sed quis odio sapien. Nullam condimentum diam id odio dapibus malesuada. Quisque eu eros diam. Quisque erat purus, posuere quis elit eget, laoreet efficitur enim. Nam sit amet augue odio. Aliquam in nibh ut tortor vehicula commodo. In lectus massa, eleifend eget laoreet id, rhoncus sit amet nulla. Pellentesque nec elit quis metus efficitur dictum. Fusce laoreet, sapien sed malesuada vestibulum, dui dolor sagittis ligula, non faucibus velit odio lobortis nibh. Nam vitae mauris scelerisque, euismod sapien vestibulum, interdum odio. Nulla pellentesque. KONIEC'

// Parametry
let indexText = 0;
const time = 40;

//Implementacja
const addLetter = () => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText === txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
    spnCursor.classList.toggle('active');
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);