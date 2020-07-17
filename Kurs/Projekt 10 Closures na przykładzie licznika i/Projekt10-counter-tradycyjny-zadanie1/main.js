const add = () => {
    let number = 0;

    number++;
    document.body.textContent = `Aktualny stan licnzika to ${number}`
}
document.addEventListener('click', add)