function solve(input) {

    input = input[0].split(`|`);
    let firstPartOfText = input.shift();
    let secondPartOfText = input.shift();
    let thirdPartOfText = input.shift().split(` `);

    let pattern = /([#$%&*])(?<capitalLetters>[A-Z]+)([#$%&*])/g;

    let match = pattern.exec(firstPartOfText);

    let capitalLetters = ``;

    while (match !== null) {
        match[2].split(``).forEach(x => {
            capitalLetters += x;
        });
        match = pattern.exec(firstPartOfText);
    }

    pattern = /\d{2}:\d{2}/g;

    match = pattern.exec(secondPartOfText);

    let lordsLength = {};

    while (match !== null) {
        let asciiSymbol = String.fromCharCode(match[0].split(`:`)[0]);
        if (capitalLetters.includes(asciiSymbol)) {
            if (!lordsLength.hasOwnProperty(asciiSymbol)) {
                lordsLength[asciiSymbol] = [];
                lordsLength[asciiSymbol].push(Number(match[0].split(`:`)[1]) + 1);
            } else {
                lordsLength[asciiSymbol].push(Number(match[0].split(`:`)[1]) + 1);
            }

        }
        match = pattern.exec(secondPartOfText);
    }

    let result = [];

    for (let word of thirdPartOfText) {
        let firstLetter = word.split(``)[0];
        if (lordsLength.hasOwnProperty(firstLetter)) {
            let wordLength = word.length;
            if (lordsLength[firstLetter].includes(wordLength)) {
                let index = lordsLength[firstLetter].indexOf(wordLength);
                let temp = lordsLength[firstLetter].splice(index, 1);
                result.push(word);
            }
        }
    }

    for (let letter of capitalLetters) {
        result.forEach(x => {
            let firstLet = x.split(``)[0];
            if (letter === firstLet) {
                console.log(x);
            }
        });
    }

}

solve([`Urgent"Message.TO$%POAML*|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11:65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post Prost Offices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig`])