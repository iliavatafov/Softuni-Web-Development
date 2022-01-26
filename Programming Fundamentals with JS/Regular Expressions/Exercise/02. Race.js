function solve(input) {

    let players = input.shift().split(`, `);
    let listOfPlayers = {}
    players.forEach(x => listOfPlayers[x] = 0);

    let pattern = /[A-Za-z0-9]/g

    for (let line of input) {
        let currentPlayer = ``;
        let distance = 0;
        if (line !== `end of race`) {
            let match = pattern.exec(line);
            while (match !== null) {
                if (!isNaN(Number(match[0]))) {
                    distance += Number(match[0]);
                } else {
                    currentPlayer += match[0];
                }
                match = pattern.exec(line);
            }
            if (listOfPlayers.hasOwnProperty(currentPlayer)) {
                listOfPlayers[currentPlayer] += distance;
            }
        } else {
            break;
        }
    }

    let sortedList = Object.entries(listOfPlayers).sort((a, b) => b[1] - a[1]);
    
    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            console.log(`1st place: ${sortedList[i][0]}`)
        } else if (i === 1) {
            console.log(`2nd place: ${sortedList[i][0]}`)
        } else {
            console.log(`3rd place: ${sortedList[i][0]}`)
        }
    }
}

solve(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]
)