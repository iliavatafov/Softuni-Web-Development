function solve(input) {

    let pattern = /[^ ,]+/g;

    input.split(',').map(x => x.trim())

    input = input.match(pattern).sort((a, b) => a.localeCompare(b));

    for (let element of input) {
        if (element.includes(` `)) {
            let index = input.indexOf(element);
            input.splice(index, 1);
        } else if (element.includes(`,`)) {
            let index = input.indexOf(element);
            input.splice(index, 1);
        } else if (element.includes(`.`)) {
            let index = element.indexOf(`.`);
            let isNumBeforElement = Number(element[index - 1]);
            let isNumAfterElement = Number(element[index + 1]);
            if (isNaN(isNumBeforElement) || isNaN(isNumAfterElement)) {
                input.splice(index, 1);
            }
        }
    }

    let result = {};

    for (let element of input) {
        result[element] = [];
    }

    pattern = /[^0-9+\-*\/.]+/g

    for (let key of Object.keys(result)) {
        let match = key.match(pattern);
        let chars = ``;
        for (let element of match) {
            chars += element;
        }
        let health = 0;
        for (let letter of chars) {
            let currentNum = letter.charCodeAt();
            health += currentNum;
        }
        result[key].push(health);
    }

    pattern = /(-*[0-9]+.[0-9]+)|(-*[0-9]+)|([*\/]+)/g

    for (let key of Object.keys(result)) {
        let match = key.match(pattern);
        let damage = 0;
        if (match === null) {
            damage = 0;
            result[key].push(damage);
            continue;
        }

        let extendersAndMultipliers = [];

        for (let letter of match) {
            let currentNum = Number(letter);
            if (!isNaN(currentNum)) {
                damage += currentNum;
            } else {
                extendersAndMultipliers.push(letter);
            }
        }

        for (let symbol of extendersAndMultipliers.join(``)) {
            if (symbol === `*`) {
                damage *= 2;
            } else if (symbol === `/`) {
                damage /= 2;
            }
        }
        result[key].push(damage);
    }

    Object.entries(result).forEach(x => console.log(`${x[0]} - ${x[1][0]} health, ${x[1][1].toFixed(2)} damage`))

}

solve(`M3ph1,st0**, Azazel    ,   sdfsd,`)