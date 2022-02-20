function solve(input) {

    let phonesArray = input.shift().split(`, `);

    let currentLine = input.shift();

    while (currentLine !== `End`) {

        let [command, phoneType] = currentLine.split(` - `);

        switch (command) {
            case `Add`:
                if (!phonesArray.includes(phoneType)) {
                    phonesArray.push(phoneType);
                }
                break;
            case `Remove`:
                if (phonesArray.includes(phoneType)) {
                    let elementIndex = phonesArray.indexOf(phoneType);
                    phonesArray.splice(elementIndex, 1);
                }
                break;
            case `Bonus phone`:
                let [oldPhone, newPhone] = phoneType.split(`:`);
                if (phonesArray.includes(oldPhone)) {
                    let oldPhoneIndex = phonesArray.indexOf(oldPhone);
                    phonesArray.splice(oldPhoneIndex + 1, 0, newPhone);
                }
                break;
            case `Last`:
                if (phonesArray.includes(phoneType)) {
                    let indexOfPhone = phonesArray.indexOf(phoneType);
                    let temp = phonesArray[indexOfPhone];
                    phonesArray.splice(indexOfPhone, 1);
                    phonesArray.push(temp);
                }
        }

        currentLine = input.shift();
    }

    console.log(phonesArray.join(`, `));
}