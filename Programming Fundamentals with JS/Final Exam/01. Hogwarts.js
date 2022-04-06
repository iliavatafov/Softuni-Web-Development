function solve(input) {

    let message = input.shift();

    let line = input.shift();

    while (line != `Abracadabra` && line != undefined) {

        let [spell, ...command] = line.split(` `);

        switch (spell) {
            case `Abjuration`:
                message = message.toUpperCase();
                console.log(message);
                break;
            case `Necromancy`:
                message = message.toLowerCase();
                console.log(message);
                break;
            case `Illusion`:

                const index = Number(command.shift());
                const letter = command.shift();
                const spellLenght = spell.length;

                if (index < 0 || index > spellLenght - 1) {
                    console.log(`The spell was too weak.`);
                } else {
                    message = message.split(``)
                    message.splice(index, 1, letter);
                    message = message.join(``);
                    console.log(`Done!`);
                }
                break;
            case `Divination`:

                const firstSubstring = command.shift();
                const secondSubstring = command.shift();

                if (message.includes(firstSubstring)) {

                    while (message.includes(firstSubstring)) {

                        const indexOfFirstSubsting = message.indexOf(firstSubstring);
                        const firstSubstringLenght = firstSubstring.length;

                        message = message.split(``);

                        message.splice(indexOfFirstSubsting, firstSubstringLenght, secondSubstring);

                        message = message.join(``);
                    }

                    console.log(message);
                }

                break;
            case `Alteration`:
                const substring = command.shift();

                if (message.includes(substring)) {

                    const indexOfSubsting = message.indexOf(substring);
                    const substringLenght = substring.length;

                    message = message.split(``);

                    message.splice(indexOfSubsting, substringLenght);

                    message = message.join(``);

                    console.log(message);
                }

                break;

            default:
                console.log(`The spell did not work!`);
                break;
        }

        line = input.shift();
    }

}

solve(["Port",
    "Illusion 0 Bar",
])