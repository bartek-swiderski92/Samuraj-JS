const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy Tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi Tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci Tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]
//Interfejs
const time = 2500;
let active = 0;

//Implementacja

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

setInterval(changeSlide, time);