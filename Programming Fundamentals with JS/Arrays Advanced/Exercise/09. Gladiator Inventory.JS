function gladiator(array) {
    let inventory = array
        .shift()
        .split(` `);

    for (let el of array) {
        let commands = el.split(` `);
        let command = commands[0];
        let element = commands[1];

        switch (command) {
            case `Buy`:
                if (!inventory.includes(element)) {
                    inventory.push(element);
                }
                break;
            case `Trash`:
                if (inventory.includes(element)) {
                    let elementIndex = inventory.indexOf(element);
                    inventory.splice(elementIndex, 1);
                }
                break;
            case `Repair`:
                if (inventory.includes(element)) {
                    let elementIndex = inventory.indexOf(element);
                    let newElement = inventory.splice(elementIndex, 1);
                    inventory.push(newElement.toString());
                }
                break;
            case `Upgrade`:
                element = element.split(`-`);
                if (inventory.includes(element[0])) {
                    let newElement = element[0] + `:` + element[1];
                    let index = inventory.indexOf(element[0]);
                    inventory.splice(index + 1, 0, newElement);
                }
        }
    }
    console.log(inventory.join(` `));
}

