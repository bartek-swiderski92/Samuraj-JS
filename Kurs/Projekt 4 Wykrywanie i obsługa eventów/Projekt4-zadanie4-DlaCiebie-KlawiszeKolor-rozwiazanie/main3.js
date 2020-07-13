/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

// let color = 100;
let red = 100;
let green = 100;
let blue = 100;


// document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
  // console.log(e.keyCode, e.which);
  // 38 - strzałka do góry
  // 40 - strzalka w dół

  // wciśnięcie klawisza strzałki do góry ma zmieniać kolor (stopniowo) na biały czyli rgb(255,255,255). Wciśniecie klawisza strzałki w dół ma zmienić kolor stopniowo na czarny (docelowo rgb(0,0,0)) 
  //tutaj twój kod

  // if (e.keyCode === 38 && color < 255) {
  //   // console.log("strzałka do góry");
  //   color += 3;
  //   document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  // } else if (e.keyCode === 40 && color > 0) {
  //   // console.log("strzałka w dół");
  //   color -= 3;
  //   document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  // }
  // // wersja 1 - instrukcja if
  // // wersja 2 - instrukcja switch

  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red <= 255 ? red+=3 : red}, ${green <= 255 ? green+=3 : green}, ${blue <= 255 ? blue+=3 : blue})`;
      break;
    case 40:
      // console.log('w dół');
      document.body.style.backgroundColor = `rgb(${red >= 0 ? red-=3 : red}, ${green >= 0 ? green-=3 : green}, ${blue >= 0 ? blue-=3 : blue})`;
      break;

  }

}

window.addEventListener('keydown', changeColor)