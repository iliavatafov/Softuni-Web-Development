function bestPlayer(input) {

    let playerName = input.shift();

    let maxGoals = Number.MIN_VALUE;

    let numberOfGoals = 0;

    let bestPlayer = "";

    let bestPlayerGoals = 0;

    while (playerName != "END") {

        numberOfGoals = Number(input.shift());

        if (numberOfGoals > maxGoals) {

            bestPlayer = playerName;
            bestPlayerGoals = numberOfGoals;
            maxGoals = bestPlayerGoals;

            if (numberOfGoals >= 10) {
                break;
            }
        }

        playerName = input.shift();
    }
    console.log(`${bestPlayer} is the best player!`);
    if (numberOfGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    }
    else {
        console.log(`He has scored ${bestPlayerGoals} goals.`);
    }
}

