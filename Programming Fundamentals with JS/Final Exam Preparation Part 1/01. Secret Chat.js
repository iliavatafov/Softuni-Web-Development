function solve(input) {

    let concealedMessage = input.shift().split(``);

    let rawCommand = input.shift();

    while (rawCommand !== `Reveal`) {

        let [command, actionOne, actionTwo] = rawCommand.split(`:|:`);
        if (command === `InsertSpace`) {
            concealedMessage = insertSpace(concealedMessage, actionOne);
        } else if (command === `Reverse`) {
            concealedMessage = reverse(concealedMessage, actionOne);
        } else if (command === `ChangeAll`) {
            concealedMessage = changeAll(concealedMessage, actionOne, actionTwo);
        }
        rawCommand = input.shift();
    }

    console.log(`You have a new text message: ${concealedMessage.join(``)}`);


    function insertSpace(concealedMessage, actionOne) {
        result = concealedMessage.splice(Number(actionOne), 0, ` `);
        console.log(concealedMessage.join(``));
        return concealedMessage;
    }

    function reverse(concealedMessage, actionOne) {
        let resultToString = concealedMessage.join(``);
        if (resultToString.includes(actionOne)) {
            resultToString = resultToString.replace(actionOne, ``);
            resultToString += actionOne.split(``).reverse().join(``);
            console.log(resultToString);
            return resultToString.split(``);
        } else {
            console.log(`error`);
            resultToString = resultToString.split(``);
        }
        return resultToString;
    }

    function changeAll(concealedMessage, actionOne, actionTwo) {
        let resultToString = concealedMessage.join(``);
        while (resultToString.includes(actionOne)) {
            resultToString = resultToString.replace(actionOne, actionTwo);
        }
        console.log(resultToString);
        return resultToString.split(``);
    }
}

solve([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]

)