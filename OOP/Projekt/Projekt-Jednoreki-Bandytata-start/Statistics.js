class Statistics {
    constructor() {
        this.gameResults = [];
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
        let loses = this.gameResults.filter(result => !result.win).length;
        console.log('Zagrane: ' + games + ', Przegrane: ' + loses + ', Wygrane: ' + wins);
        console.log(games, wins, loses);
        return [games, wins, loses]
    }
}

const stats = new Statistics()