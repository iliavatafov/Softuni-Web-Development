function solve(input) {

    let rawPassword = input.shift();

    let lineOfInput = input.shift();

    while (lineOfInput != `Done`) {

        let [command, parameterOne, parameterTwo] = lineOfInput.split(` `);

        if (command === `TakeOdd`) {
            rawPassword = takeOdd(rawPassword);
        } else if (command === `Cut`) {
            rawPassword = cut(rawPassword, parameterOne, parameterTwo);
        } else if (command === `Substitute`) {
            rawPassword = substitute(rawPassword, parameterOne, parameterTwo)
        }
        lineOfInput = input.shift();
    }

    console.log(`Your password is: ${rawPassword}`)

    function takeOdd(rawPassword) {
        let newPass = [];
        for (let i = 1; i < rawPassword.length; i += 2) {
            newPass.push(rawPassword[i]);
        }
        console.log(newPass.join(``));
        return newPass.join(``);
    }

    function cut(rawPassword, index, length) {
        rawPassword = rawPassword.split(``);
        rawPassword.splice(index, length);
        console.log(rawPassword.join(``));
        return rawPassword.join(``);
    }

    function substitute(rawPassword, substring, subst) {
        if (rawPassword.includes(substring)) {
            while (rawPassword.includes(substring)) {
                let indexOfSubstring = rawPassword.indexOf(substring);
                let substringLength = substring.length;
                rawPassword = rawPassword.split(``);
                rawPassword.splice(indexOfSubstring, substringLength, subst);
                rawPassword = rawPassword.join(``);
            }
            console.log(rawPassword);
            return rawPassword;
        } else {
            console.log(`Nothing to replace!`);
            return rawPassword;
        }
    }
}
