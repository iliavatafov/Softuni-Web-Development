function train(strings) {

    let result = strings
        .shift()
        .split(` `)
        .map(Number);


    let wagonCapacity = Number(strings
        .shift());

    for (let i = 0; i < strings.length; i++) {
        let [command, passagers] = strings[i].split(` `);

        switch (command) {
            case `Add`:
                addWagonsWithPassagers(passagers)
                break;
            default:
                addPassagers(result, command, wagonCapacity)
                break;
        }
    }

    function addWagonsWithPassagers(passagers) {
        return result.push(Number(passagers));
    }

    function addPassagers(result, command, wagonCapacity) {
        for (let i = 0; i < result.length; i++) {
            let total = Number(command) + result[i];
            if (wagonCapacity >= total) {
                result.splice(i, 1, total)
                return result;
            }
        }
    }

    console.log(result.join(` `));
}
