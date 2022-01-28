function memoryGame(arr) {
    let sequance = arr.shift().split(` `);
    let el = 0;
    let moves = 0;

    for (el; el < arr.length; el++) {
        moves++;
        let [firstIndex, secondIndex] = arr[el].split(` `);

        if (firstIndex === `end`) {
            console.log(`Sorry you lose :(`);
            console.log(sequance.join(` `))
            return;
        }
        firstIndex = Number(firstIndex);
        secondIndex = Number(secondIndex);

        if (firstIndex === secondIndex || firstIndex > sequance.length - 1 || firstIndex < 0 || secondIndex > sequance.length - 1 || secondIndex < 0) {
            atniCheat(firstIndex, secondIndex, sequance, moves);
        } else {
            matching(firstIndex, secondIndex, sequance);
        }

        if (sequance.length === 0) {
            console.log(`You have won in ${moves} turns!`)
            return;
        }
    }
    function atniCheat(firstIndex, secondIndex, sequance, moves) {
        let startElement = Math.ceil(sequance.length / 2)

        if (firstIndex > sequance.length - 1 || firstIndex < 0) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequance.splice(startElement, 0, `-${moves}a`, `-${moves}a`);
        } else if (secondIndex > sequance.length - 1 || secondIndex < 0) {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequance.splice(startElement, 0, `-${moves}a`, `-${moves}a`);
        } else {
            console.log(`Invalid input! Adding additional elements to the board`);
            sequance.splice(startElement, 0, `-${moves}a`, `-${moves}a`);
        }
    }

    function matching(firstElemen, secondElement, sequance) {
        if (sequance[firstElemen] === sequance[secondElement]) {
            if (firstElemen > secondElement) {
                console.log(`Congrats! You have found matching elements - ${sequance[firstElemen]}!`)
                let temp = sequance.splice(firstElemen, 1);
                let temp1 = sequance.splice(secondElement, 1);
            } else {
                console.log(`Congrats! You have found matching elements - ${sequance[firstElemen]}!`)
                let temp = sequance.splice(firstElemen, 1);
                let temp1 = sequance.splice(secondElement - 1, 1);
            }
        } else {
            console.log(`Try again!`);
        }
    }
}
