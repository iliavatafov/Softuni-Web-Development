function solve(input) {
    let encryptedMessage = input.shift();

    let lineOfInput = input.shift();

    while (lineOfInput != `Decode`) {
        let [command, parameterOne, parameterTwo] = lineOfInput.split(`|`);
        if (command === `Move`) {
            encryptedMessage = move(encryptedMessage, parameterOne);
        } else if (command === `Insert`) {
            encryptedMessage = insert(encryptedMessage, parameterOne, parameterTwo);
        } else if (command === `ChangeAll`) {
            encryptedMessage = changeAll(encryptedMessage, parameterOne, parameterTwo);
        }
        lineOfInput = input.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);

    function move(encryptedMessage, numberOfLetter) {
        encryptedMessage = encryptedMessage.split(``);
        let replacment = encryptedMessage.slice(0, numberOfLetter);
        encryptedMessage.splice(0, numberOfLetter);
        encryptedMessage = encryptedMessage.join(``).concat(replacment.join(``));
        return encryptedMessage;
    }

    function insert(encryptedMessage, index, value) {
        encryptedMessage = encryptedMessage.split(``);
        encryptedMessage.splice(index, 0, value);
        return encryptedMessage.join(``);
    }

    function changeAll(encryptedMessage, substring, replacment) {
        encryptedMessage = encryptedMessage.split(``);
        while (encryptedMessage.includes(substring)) {
            let substrLength = substring.length;
            let substringFirstIndex = encryptedMessage.indexOf(substring);
            encryptedMessage.splice(substringFirstIndex, substrLength, replacment);
        }
        return encryptedMessage.join(``);
    }
}