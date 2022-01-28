function solve(input) {

    let number = Number(input.shift());

    let decryptedLine = input.shift();

    let decryptedMessages = [];

    while (decryptedLine !== `end`) {
        let currentMessage = ``;
        for (let element of decryptedLine) {
            let currentCharNum = element.charCodeAt() - number;
            let newChar = String.fromCharCode(currentCharNum);
            currentMessage += newChar;
        }
        decryptedMessages.push(currentMessage);
        decryptedLine = input.shift()
    }
    let pattern = /@(?<name>[A-Za-z]+)(?:[^-!\:>]+)?!(?<goodOrBad>[G])!/

    let listOfGoodKids = [];

    for (let message of decryptedMessages) {
        let match = pattern.exec(message);
        if (match !== null) {
            listOfGoodKids.push(match[1])
        }
            
    }

    console.log(listOfGoodKids.join(`\n`));
}

solve(['3',
'CNdwhamigyenumje$J$',
'CEreelh-nmguuejnW$J$',
'CVwdq&gnmjkvng$Q$',
'end']
)