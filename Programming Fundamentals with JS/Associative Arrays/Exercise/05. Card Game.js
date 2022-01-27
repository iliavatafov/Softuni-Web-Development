function solve(arr) {
    let scoreCards = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1, }
    let players = {};
    for (let line of arr) {
        let [playerName, playerCards] = line.split(`: `);
        playerCards = playerCards.split(`, `);
        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = [];
        }
        players[playerName] = players[playerName].concat(playerCards);
    }
    for (let [key, value] of Object.entries(players)) {
        players[key] = new Set(value);
    }

    for (let [key, value] of Object.entries(players)) {
        let currentPlayerResult = 0;
        for (let element of value) {
            element = element.split(``);
            let type = element.pop();
            let power = element.join(``);
            type = Number(scoreCards[type]);
            if (power === `J` || power === `K` || power === `A` || power === `Q`) {
                power = Number(scoreCards[power]);
            } else {
                power = Number(power);
            }
            let score = power * type;
            currentPlayerResult += score;
        }
        players[key] = currentPlayerResult;
    }

    for (let [key, value] of Object.entries(players)) {
        console.log(`${key}: ${value}`);
    }

}