class Statistics {
    constructor() {
        this.gameResults = [{
            win: true,
            bid: 2
        }, {
            win: false,
            bid: -10
        }];
    }
    //Metoda może być opisana w konstruktorze, wpisana została do prototypu dla treningu
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        };
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = this.gameResults.filter(result => !result.win).length;
        console.log('Zagrane: ' + games + ', Przegrane: ' + losses + ', Wygrane: ' + wins);
        // return[games, liczbaWygranych, liczbaPorazek]
    }
}

const stats = new Statistics()