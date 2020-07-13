// const input = document.getElementById('pass');
// const div = document.querySelector('.message');
// const password = "user";
// const message = "wyjechałam na zawsze"

// input.addEventListener('input', (e) => {
//  // console.log(e.target.value);
//  if (password === e.target.value) {
//   div.textContent = message;
//   e.target.value = '';
//  } else {
//   div.textContent = '';
//  }
// })

// input.addEventListener('focus', (e) => {
//  e.target.classList.add('active');
// })

// input.addEventListener('blur', (e) => {
//  e.target.classList.remove('active');
// })

const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ["user", 'wiosna', 'Ania'];
const messages = ['wyjechałam na zawsze', 'piekna pora roku', 'Fajny styl masz'];


input.addEventListener('change', function (e) {
    div.textContent = '';

    console.log(e.target.value);
    // console.log(this.value)
    const text = e.target.value;

    passwords.forEach((password, index) => {
        if (password === text) {
            console.log(password, index);
            div.textContent = messages[index];
            e.target.value = '';
        }
    });
});

input.addEventListener('focus', (e) => {
    e.target.classList.add('active');
})

input.addEventListener('blur', (e) => {
    e.target.classList.remove('active');
})

// if (password === e.target.value) {
//     div.textContent = message;
//     e.target.value = '';
// } else {
//     div.textContent = '';
// }