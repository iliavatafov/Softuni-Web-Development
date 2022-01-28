function solve(input) {

    let numberOfPlanets = input.shift();
    let pattern = /[STARstar]/g
    let result = [];

    for (let line of input) {
        let decrypted = ``;
        let length = line.match(pattern);
        if (length === null) {
            length = 0;
        } else {
            length = length.length;
        }
        for (let char of line) {
            let asciiNumber = char.charCodeAt() - length;
            let newChar = String.fromCharCode(asciiNumber);
            decrypted += newChar;
        }
        result.push(decrypted);
    }

    pattern = /(?:[^@\-\!\:\>]+)?@(?<planetName>[A-Z][a-z]+)(?:[^@\-\!\:\>]+)?:(?:[^@\-\!\:\>0-9]+)?(?<population>\d+)(?:[^@\-\!\:\>0-9]+)?!(?:[^@\-\!\:\>AD]+)?(?<attackType>[AD])(?:[^@\-\!\:\>AD]+)?!(?:[^@\-\!\:\>]+)?->(?:[^@\-\!\:\>]+)?(?<soldiersCount>\d+)(?:[^@\-\!\:\>]+)?/

    let finalObject = {
        attacked: [],
        destroyed: [],
    }

    for (let el of result) {
        let match = pattern.exec(el);
        if (match !== null) {
            if (match.groups.attackType === `A`) {
                finalObject.attacked.push(match.groups.planetName);
            } else {
                finalObject.destroyed.push(match.groups.planetName);
            }
        }
    }

    for (let [key, value] of Object.entries(finalObject)) {
        if (key === `attacked`) {
            let countOfPlanets = value.length;
            let sorted = value.sort((a, b) => a.localeCompare(b));
            console.log(`Attacked planets: ${countOfPlanets}`);
            sorted.forEach(x => console.log(`-> ${x}`));
        } else {
            let countOfPlanets = value.length;
            let sorted = value.sort((a, b) => a.localeCompare(b));
            console.log(`Destroyed planets: ${countOfPlanets}`);
            sorted.forEach(x => console.log(`-> ${x}`));
        }
    }
}