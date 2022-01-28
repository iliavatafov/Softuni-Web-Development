function christmasTournament(input) {

    let days = Number(input.shift());

    let sport = input.shift();

    let result = "";

    let money = 0;

    let counterWins = 0;

    let counterLose = 0;

    let counterWinner = 0;

    let currentMoney = 0;

    let currentWins = 0;

    let currentLoses = 0;

    let totalMoney = 0;

    for (i = 0; i < days; i++) {

        while (sport != "Finish") {

            result = input.shift();

            switch (result) {

                case "win":
                    currentMoney += 20;
                    counterWins++;
                    currentWins++;
                    break;
                case "lose":
                    counterLose++;
                    currentLoses++;
                    break;
            }
            if (currentLoses < currentWins) {
                currentMoney *= 1.10;
                counterWinner++;
            }

            totalMoney += currentMoney;

            sport = input.shift();
        }
    }
    if (counterWins > counterLose) {
        totalMoney *= 1.20;
        console.log(`You won the tournament! total raised money: ${totalMoney.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
