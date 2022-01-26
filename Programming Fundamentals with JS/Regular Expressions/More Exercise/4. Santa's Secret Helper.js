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
    let pattern = /@(?<name>[A-Za-z]+)([^-!@\:>]+)?!(?<goodOrBad>[GN])!/g

    let listOfGoodKids = [];

    for (let message of decryptedMessages) {
        let match = pattern.exec(decryptedMessages);
        if (match !== null && match[3] === `G`) {
            listOfGoodKids.push(match[1])
        }      
    }

    console.log(listOfGoodKids.join(`\n`))
}

solve([`3`,
`N}eideidmk$'(mnyenmCNlpamnin$J$`,
`ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge`,
`ppqmkkkmnolmnnCEhq/vkievk$Q$`,
`yyegiivoguCYdohqwlqh/kguimhk$J$`,
`end`])