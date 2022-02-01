function solve(input) {

    let rawKey = input.shift();

    let lineOfInput = input.shift();

    while (lineOfInput !== `Generate`) {

        let [command, parameterOne, parameterTwo, parameterThree] = lineOfInput.split(`>>>`);

        switch (command) {
            case `Contains`:
                if (rawKey.includes(parameterOne)) {
                    console.log(`${rawKey} contains ${parameterOne}`);
                } else {
                    console.log(`Substring not found!`)
                }
                break;
            case `Flip`:
                let rawKeyArray = rawKey.split(``);
                let substring = rawKeyArray.slice(Number(parameterTwo), Number(parameterThree))
                if (parameterOne === `Upper`) {
                    substring = substring.join(``).toUpperCase();
                } else {
                    substring = substring.join(``).toLowerCase();
                }
                rawKeyArray.splice(Number(parameterTwo), Number(parameterThree) - Number(parameterTwo), substring);
                rawKey = rawKeyArray.join(``);
                console.log(rawKey);
                break;
            case `Slice`:
                let keyArray = rawKey.split(``);
                keyArray.splice(Number(parameterOne), Number(parameterTwo) - Number(parameterOne));
                rawKey = keyArray.join(``);
                console.log(rawKey);
                break;
        }

        lineOfInput = input.shift();
    }

    console.log(`Your activation key is: ${rawKey}`)

}


