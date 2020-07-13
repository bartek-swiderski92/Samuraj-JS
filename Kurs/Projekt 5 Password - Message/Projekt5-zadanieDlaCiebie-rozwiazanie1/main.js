// const input = document.querySelector("input");
// const passwords = ['jedEN', 'DwA'];
// const messages = ["super", "działa!"]

// const showMessage = (e) => {
//  passwords.forEach((item, i) => {
//   if (item.toLowerCase() === e.target.value.toLowerCase()) {
//    document.querySelector('div').textContent = messages[i];
//   }
//  })
// }

// input.addEventListener("input", showMessage)



const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"]
const div = document.querySelector('div');
const showMessage = (e) => {
    passwords.forEach((item, index) => {
        if (item.toUpperCase() === e.target.value.toUpperCase()) {
            console.log("trafilismy");
            div.textContent = messages[index];
        }
    })
}

input.addEventListener("input", showMessage)