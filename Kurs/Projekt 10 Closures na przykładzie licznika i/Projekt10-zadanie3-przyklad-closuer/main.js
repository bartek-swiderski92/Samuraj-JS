const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Możesz Kupić piwo' : 'Nie możesz kupić piwa'}`);
    }
    return showName
}

const mieszko = user('Mieszko', 20);
const jagienka = user('Jagienka', 16);
mieszko();
jagienka();